import { Module } from '@nestjs/common';
import { ConceitosAutomaticosController } from './conceitos-automaticos.controller';

@Module({
  controllers: [ConceitosAutomaticosController]
})
export class ConceitosAutomaticosModule {
  
}
