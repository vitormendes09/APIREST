import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModel } from 'src/conceitos-manual/conceitos-manual.model';
import { ConceitosAutomaticosController } from 'src/conceitos-automaticos/conceitos-automaticos.controller';

@Module({
  imports: [ConceitosManualModel],
  controllers: [AppController, ConceitosAutomaticosController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
