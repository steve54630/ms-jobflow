import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus
} from '@nestjs/common';

export class VerifyUserGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean {

    // Obtenir la requête HTTP à partir du contexte d'exécution
    const request = context.switchToHttp().getRequest();

    // Obtenir l'id de l'utilisateur dans la requête
    const idUser = request['user'].sub;

    // Obtenir l'id renseigné dans la requête
    const ressourceID = request.params.member_id;

    if (ressourceID == null) {
        return true;
    }

    /* Comparer l'id de l'utilisateur et l'id renseigné
     * si ils sont différents, on lève une exception */
    if (idUser != ressourceID) {
      throw new HttpException("Ressource interdite", HttpStatus.FORBIDDEN);
    }

    return true;
  }
}
