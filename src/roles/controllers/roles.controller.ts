import { Controller, Get, Post,Body,Put, Delete, Param } from '@nestjs/common';

@Controller('api/roles')
export class RolesController {
    @Get()
    getAll(){
        return "hola mundo";
    }

    @Post()
    createRol(@Body() body: any){
        return body;
    }
    @Put()
    updateRol(@Body() body: any){
        return body;
    }
    @Delete(':id')
    deleteRol(@Param('id') id:number){
        return true;
    }
}
