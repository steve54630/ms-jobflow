import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { MemberService } from 'src/member/member.service';
import { access } from 'fs';
import { RpcException } from '@nestjs/microservices';

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Authentifie un utilisateur en fonction de son nom d'utilisateur
   * et de son mot de passe.
   * @param authMemberDto Le nom d'utilisateur et le mot de passe
   * @returns Un objet contenant un token d'accès et un token de rafraîchissement
   * @throws RpcException Si l'utilisateur n'est pas trouvé ou si le mot de passe est incorrect
   */
  async login(
    authMemberDto: AuthDto & { ip?: string },
  ): Promise<{ accessToken: string }> {
    // Vérfie que l'utilisateur existe
    const userLogin = await this.memberService.findOne(
      'username',
      authMemberDto.username,
    );

    // Si il n'existe pas, on lève une exception
    if (userLogin == null) {
      throw new RpcException({
        code: HttpStatus.NOT_FOUND,
        message: 'Utilisateur non trouvé',
      });
    }

    // Vérifie que le mot de passe est correct
    // Si le mot de passe est incorrect, on lève une exception
    if (
      !(
        userLogin.password === null ||
        (await verify(userLogin.password, authMemberDto.password!))
      )
    ) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Accès bloqué',
      });
    }

    // Si le mot de passe est correct, on génère un payload pour le token d'authentification
    const payload = {
      name: userLogin.username,
      sub: userLogin.id,
      ip: authMemberDto.ip,
    };

    // Génération des tokens d'authentification
    const token = await this.generateAuthToken(payload);

    return token;
  }

  /**
   * Génère une nouvelle combinaison de tokens d'authentification
   * en fonction d'un token de rafraîchissement
   * @param refreshToken Le token de rafraîchissement
   * @returns Les nouveaux tokens d'authentification
   * @throws RpcException Si le token est manquant ou non valide
   */
  async refresh(body: {
    refreshToken: string;
    ip: string;
  }): Promise<{ accessToken: string }> {
    const refreshToken = body.refreshToken;

    // Verifie la présence du token de rafraîchissement
    if (!refreshToken) {
      throw new RpcException({
        code: HttpStatus.BAD_REQUEST,
        message: 'Token de rafraîchissement manquant',
      });
    }

    //Vérifier si le token de rafraîchissement est valide
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.SECRET_KEY_REFRESH,
      });

      //Générer une nouvelle combinaison de tokens
      const token = await this.generateAuthToken({
        sub: payload.sub,
        name: payload.name,
        ip: body.ip,
      });

      return token;
    } catch (error) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Token de rafraîchissement non valide',
      });
    }
  }

  async jwt(request: { token: string; ip: string }) {
    try {
      const payload = await this.jwtService.verifyAsync(request.token, {
        secret: process.env.SECRET_KEY,
      });

      // Refuser la connexion si l'IP du client est différente de celle du token
      if (request.ip != payload.ip) {
        throw new RpcException({
          code: HttpStatus.UNAUTHORIZED,
          message: 'Accès bloqué',
        })
      }

      // Si le token est valide, ajouter les informations de l'utilisateur à la requête
      return payload;
    } catch (error) {
      console.log(error);
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Accès bloqué',
      })
    }

    return {};
  }

  /**
   * Génère une combinaison de tokens d'authentification
   * en fonction d'un payload
   * @param payload Le payload du token d'authentification
   * @returns Une combinaison de tokens d'authentification
   */
  async generateAuthToken(payload: any) {
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.SECRET_KEY,
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.SECRET_KEY_REFRESH,
      expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
