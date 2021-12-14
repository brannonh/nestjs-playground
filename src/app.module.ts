import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PensModule } from './pens/pens.module';

@Module({
  imports: [ PensModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
