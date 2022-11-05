import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';

import {Roles} from 'src/decorators/roles.decorator';
import {Student} from 'src/models';
import {Permissions} from 'src/models/enums';
import {StudentService} from './student.service';

@Controller('api/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('get')
  @Roles(Permissions.SHOW_STUDENTS)
  getAll(): Promise<Student[]> {
    return this.studentService.getAll();
  }

  @Post('insert')
  @Roles(Permissions.ADD_STUDENTS)
  insert(@Body() row: Student) {
    return this.studentService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  @Roles(Permissions.UPDATE_STUDENTS)
  update(@Body() row: Student, @Param('id') id: string) {
    return this.studentService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  @Roles(Permissions.DELETE_STUDENTS)
  delete(@Param('id') id: string) {
    return this.studentService.delete(id);
  }
}
