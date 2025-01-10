import { Get, Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controlle';

@Module({
  controllers: [ConceitosManualController],
})
export class ConceitosManualModel {
  
}
