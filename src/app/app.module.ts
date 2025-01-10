import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModel } from 'src/conceitos-manual/conceitos-manual.model';

@Module({
  imports: [ConceitosManualModel],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
