import { Catch, ArgumentsHost, ExceptionFilter } from "@nestjs/common";

@Catch()
export class NatsExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const isRpcFormat =
      exception?.code &&
      typeof exception.code === 'number' &&
      typeof exception.message === 'string';

    if (isRpcFormat) {
      return response
        .status(exception.code)
        .json({ statusCode: exception.code, message: exception.message });
    }

    // Autres erreurs : on laisse Nest gérer
    throw exception;
  }
}