import { SetMetadata } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

/**
 * Vérifie si la route est marquée comme accessible publiquement
 * @param context Le contexte d'exécution de la requête
 * @returns true si la route est accessible publiquement, sinon false
 */
export function isPublic(context: ExecutionContext, reflector: Reflector) {
  const isPublic = reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);
  if (isPublic) {
    // 💡 Page public donc autorisé
    return true;
  }

  return false;
}
