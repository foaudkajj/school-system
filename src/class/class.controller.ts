import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';

import {Roles} from 'src/decorators/roles.decorator';
import {Class} from 'src/models';
import {Permissions} from 'src/models/enums';
import {AssignLessonToClassRequest} from 'src/models/requests/assign-lesson-to-class.request';
import {ClassService} from './class.service';

@Controller('api/classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get('get')
  getAll(): Promise<Class[]> {
    return this.classService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Class) {
    return this.classService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Class, @Param('id') id: string) {
    return this.classService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.classService.delete(id);
  }

  @Roles(Permissions.ASSING_LESSON_CLASS)
  @Post('assign-lessons-to-class')
  assignLessonsToClass(@Body() request: AssignLessonToClassRequest) {
    return this.classService.assignLessonsToClass(request);
  }

  @Get('get-class-lessons/:class_id')
  @ApiParam({name: 'class_id'})
  getClassLessons(@Param('class_id') classId: string) {
    return this.classService.getClassLessons(classId);
  }
}
