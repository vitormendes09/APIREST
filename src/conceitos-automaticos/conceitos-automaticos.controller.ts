import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-automaticos')
export class ConceitosAutomaticosController {
    @Get()
      home(): string {
        return 'Método Automático!';
      }
}
