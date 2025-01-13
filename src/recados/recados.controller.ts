import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

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
    remove(@Param('id') id: String){
        return 'This action removes a recado';
    }

    
}


