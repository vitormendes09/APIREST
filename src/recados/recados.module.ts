import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadoService } from './Recados.serice';

@Module({
  controllers: [RecadosController],
  providers: [RecadoService],
})
export class RecadosModule {}
