import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';

import {Roles} from 'src/decorators/roles.decorator';
import {Student} from 'src/models';
import {Permissions} from 'src/models/enums';
import {StudentService} from './student.service';

@Controller('api/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Roles(Permissions.SHOW_STUDENTS)
  @Get('get')
  getAll(): Promise<Student[]> {
    return this.studentService.getAll();
  }

  @Roles(Permissions.ADD_STUDENTS)
  @Post('insert')
  insert(@Body() row: Student) {
    return this.studentService.insert(row);
  }

  @Roles(Permissions.UPDATE_STUDENTS)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Student, @Param('id') id: string) {
    return this.studentService.update(row, id);
  }

  @Roles(Permissions.DELETE_STUDENTS)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.studentService.delete(id);
  }
}
