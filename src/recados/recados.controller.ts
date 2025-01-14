import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadoService } from './Recados.serice';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadoService: RecadoService) {}
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return this.recadoService.hello;
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    console.log(id);
    return `This action returns a # ${id} recado`;
  }

  @Post()
  create(@Body() createRecadoDto: any) {
    return createRecadoDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecadoDto: any) {
    return {
      id,
      ...updateRecadoDto,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action returns a # ${id} recado`;
  }
}
