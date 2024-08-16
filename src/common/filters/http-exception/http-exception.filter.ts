import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

// @Catch()
// export class HttpExceptionFilter<T> implements ExceptionFilter {
//   catch(exception: T, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = 
//       exception instanceof HttpException
//         ? +exception.getStatus() as number
//         : HttpStatus.INTERNAL_SERVER_ERROR;

//     const message = 
//       exception instanceof HttpException
//         ? exception.getResponse()
//         : 'Internal server error';

//       response.status(status).json({
//         statusCode: status,
//         timestamp: new Date().toISOString(),
//         path: request.url,
//         message,
//       });
//   }
// }

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}