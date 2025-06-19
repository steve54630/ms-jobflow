import { Catch, RpcExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { Observable, throwError } from "rxjs";

@Catch(RpcException)
export class NatsExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const error = exception.getError();

    const message = error["message"] ? error["message"] : "Internal server error";

    const code = error["code"] ? error["code"] : HttpStatus.INTERNAL_SERVER_ERROR;

    return throwError(() => new HttpException(message, code));
  }
}