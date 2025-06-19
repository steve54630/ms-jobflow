import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class AuthGuard {
  constructor(private natsService: NatsService) {}

  /**
   * Vérifie si la requête est authentifiée
   * @param context Le contexte d'exécution de la requête
   * @returns true si la requête est authentifiée, sinon false
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Obtenir la requête HTTP à partir du contexte d'exécution
    const request = context.switchToHttp().getRequest();

    //Extraire le token JWT de l'en-tête Authorization de la requête
    const token = this.extractTokenFromHeader(request);

    // Vérifier si le token est présent
    if (!token) {
      throw new HttpException('Token absent', HttpStatus.UNAUTHORIZED);
    }

    const payload = await this.natsService.send('auth.jwt', { token, ip : request.ip });

    request['user'] = { sub: payload.sub, name: payload.name };

    return true;
  }

  /**
   * Extrait le token JWT de l'en-tête Authorization de la requête
   * @param request La requête HTTP
   * @returns Le token JWT ou undefined si non trouvé
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
