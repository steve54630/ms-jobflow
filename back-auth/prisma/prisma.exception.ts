import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { RpcException, BaseRpcExceptionFilter } from '@nestjs/microservices';
import { PrismaCode } from './prisma.enum';
import { throwError } from 'rxjs';

@Catch(PrismaClientKnownRequestError)
export class PrismaException extends BaseRpcExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, _host: ArgumentsHost) {
    switch (exception.code) {

      case PrismaCode.TOO_LONG_VALUE:
        return throwError(() =>
          new RpcException({
            code: HttpStatus.BAD_REQUEST,
            message: `Valeur trop longue pour la colonne ${exception.meta?.target} dans ${exception.meta?.modelName}`,
          }),
        );

      case PrismaCode.FOREIGN_KEY_CONSTRAINT:
        return throwError(() =>
          new RpcException({
            code: HttpStatus.CONFLICT,
            message: `Contrainte de FK non respectée dans ${exception.meta?.modelName} (${exception.meta?.field_name})`,
          }),
        );

      case PrismaCode.NOT_UNIQUE:
        return throwError(() =>
          new RpcException({
            code: HttpStatus.CONFLICT,
            message: `Unicité violée (${exception.meta?.target}) dans ${exception.meta?.modelName}`,
          }),
        );

      case PrismaCode.NOT_FOUND_ENTRY:
        return throwError(() =>
          new RpcException({
            code: HttpStatus.NOT_FOUND,
            message: `Entrée introuvable dans ${exception.meta?.modelName}`,
          }),
        );

      default:
        console.error('Unhandled Prisma error', exception);
        return throwError(() =>
          new RpcException({
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Erreur serveur',
          }),
        );
    }
  }
}