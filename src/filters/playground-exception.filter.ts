import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PlaygroundException } from 'src/exceptions/playground-exception';

@Catch(PlaygroundException)
export class PlaygroundExceptionFilter implements ExceptionFilter {
  catch(exception: PlaygroundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
