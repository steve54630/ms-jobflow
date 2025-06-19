import {
  ArgumentsHost,
  Catch,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaCode } from './prisma.enum';
import { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export default class PrismaException extends BaseExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case PrismaCode.TOO_LONG_VALUE: {
        const statusCode = HttpStatus.BAD_REQUEST;
        response.status(statusCode).json({
          statusCode: statusCode,
          message: `Valeur trop longue pour la colonne ${exception.meta?.target} dans la table ${exception.meta?.modelName}`,
        });
        break;
      }

      case PrismaCode.FOREIGN_KEY_CONSTRAINT: {
        const statusCode = HttpStatus.CONFLICT;
        response.status(statusCode).json({
          statusCode: statusCode,
          message: `Contrainte de clé étrangère non respectée dans la table ${exception.meta?.modelName} pour la colonne ${exception.meta?.field_name}`,
        });
        break;
      }

      case PrismaCode.NOT_UNIQUE: {
        const statusCode = HttpStatus.CONFLICT;
        response.status(statusCode).json({
          statusCode: statusCode,
          message: `Problème d'unicité pour la contrainte ${exception.meta?.target} dans la table ${exception.meta?.modelName}`,
        });
        break;
      }

      case PrismaCode.NOT_FOUND_ENTRY: {
        const statusCode = HttpStatus.NOT_FOUND;
        response.status(statusCode).json({
          statusCode: statusCode,
          message: `Ressource non trouvée dans la table ${exception.meta?.modelName}`,
        });
        break;
      }

      default:
        console.log('🚀 ~ PrismaException ~ exception:', exception);
    }
  }
}
