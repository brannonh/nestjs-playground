import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './middleware/logger/logger.middleware';
import { PensController } from './pens/pens.controller';
import { PensModule } from './pens/pens.module';

@Module({
  imports: [ PensModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(logger).forRoutes(PensController);
  }
}
