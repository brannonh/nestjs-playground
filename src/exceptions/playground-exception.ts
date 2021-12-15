import { HttpException } from '@nestjs/common';

export class PlaygroundException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message ?? 'Internal playground error', status ?? 500);
  }
}
