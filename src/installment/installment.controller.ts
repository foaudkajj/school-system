import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  
  } from '@nestjs/common';
  import {ApiParam} from '@nestjs/swagger';
  import {Installment} from 'src/models';
import { InstallmentService } from './installment.service';
  
  @Controller('installment')
  export class InstallmentController {
    constructor(private readonly installmentService: InstallmentService) {}
  
    @Get('get')
    getAll(): Promise<Installment[]> {
      return this.installmentService.getAll();
    }
  
    @Post('insert')
    insert(@Body() row: Installment) {
      return this.installmentService.insert(row);
    }
  
    @Put('update/:id')
    @ApiParam({name: 'id'})
    update(@Body() row: Installment, @Param('id') id: string) {
      return this.installmentService.update(row, id);
    }
  
    @Delete('delete/:id')
    @ApiParam({name: 'id'})
    delete(@Param('id') id: string) {
      return this.installmentService.delete(id);
    }
  }
  