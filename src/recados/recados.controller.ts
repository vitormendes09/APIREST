import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    @Get()
    findAll() {
        return 'This action returns all recados';
    }

    @Get(':id')
    findOne(@Param('id') id: any) {
        console.log(id);
        return `This action returns a #${id} recado`;
    }
}
