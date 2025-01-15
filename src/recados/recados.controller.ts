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
    return this.recadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.recadoService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.recadoService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.recadoService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadoService.remove(id);
  }
}
