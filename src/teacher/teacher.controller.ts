import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';

import {Roles} from 'src/decorators/roles.decorator';
import {Teacher} from 'src/models';
import {Permissions} from 'src/models/enums';
import {TeacherService} from './teacher.service';

@Controller('api/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Roles(Permissions.SHOW_TEACHERS)
  @Get('get')
  getAll(): Promise<Teacher[]> {
    return this.teacherService.getAll();
  }

  @Roles(Permissions.ADD_TEACHERS)
  @Post('insert')
  insert(@Body() row: Teacher) {
    return this.teacherService.insert(row);
  }

  @Roles(Permissions.UPDATE_TEACHERS)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Teacher, @Param('id') id: string) {
    return this.teacherService.update(row, id);
  }

  @Roles(Permissions.DELETE_TEACHERS)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.teacherService.delete(id);
  }
}
