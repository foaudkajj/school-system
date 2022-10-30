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
import {ApiParam} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import {Teacher} from 'src/models';
import { Permissions } from 'src/models/enums';
import { TeacherService } from './teacher.service';

@Controller('api/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Roles(Permissions.SHOW_TEACHERS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getAll(): Promise<Teacher[]> {
    return this.teacherService.getAll();
  }

  @Roles(Permissions.ADD_TEACHERS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('insert')
  insert(@Body() row: Teacher) {
    return this.teacherService.insert(row);
  }

  @Roles(Permissions.UPDATE_TEACHERS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Teacher, @Param('id') id: string) {
    return this.teacherService.update(row, id);
  }

  @Roles(Permissions.DELETE_TEACHERS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.teacherService.delete(id);
  }
}
