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
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

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
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadoService.create(createRecadoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadoService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadoService.remove(id);
  }
}
