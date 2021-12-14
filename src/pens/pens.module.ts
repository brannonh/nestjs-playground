import { Module } from '@nestjs/common';
import { PensController } from './pens.controller';
import { PensService } from './pens.service';

@Module({
  controllers: [ PensController ],
  providers: [ PensService ],
  exports: [ PensService ],
})
export class PensModule {}
