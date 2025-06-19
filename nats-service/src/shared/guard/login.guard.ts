import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { VerifyUserGuard } from './member.guard';
import { isPublic } from 'src/shared/decorator/public.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private readonly authGuard: AuthGuard,
    private readonly verifyUserGuard: VerifyUserGuard,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //Skip le processus si isPublic est vrai
    if (isPublic(context, this.reflector)) return true;

    //Verfie que l'utilisateur est authentifié et a accés à la ressource
    return (
      (await this.authGuard.canActivate(context)) &&
      this.verifyUserGuard.canActivate(context)
    );
  }
}
