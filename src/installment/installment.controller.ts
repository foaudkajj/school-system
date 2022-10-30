import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,

} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Installment } from 'src/models';
import { Permissions } from 'src/models/enums';
import { InstallmentService } from './installment.service';

@Controller('api/installments')
export class InstallmentController {
  constructor(private readonly installmentService: InstallmentService) { }

  @Roles(Permissions.SHOW_INSTALLMENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getAll(): Promise<Installment[]> {
    return this.installmentService.getAll();
  }

  @Roles(Permissions.ADD_INSTALLMENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('insert')
  insert(@Body() row: Installment) {
    return this.installmentService.insert(row);
  }

  @Roles(Permissions.UPDATE_INSTALLMENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Installment, @Param('id') id: string) {
    return this.installmentService.update(row, id);
  }

  @Roles(Permissions.DELETE_INSTALLMENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.installmentService.delete(id);
  }
}
