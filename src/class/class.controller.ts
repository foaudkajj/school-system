import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,

} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Class } from 'src/models';
import { AssignLessonToClassRequest } from 'src/models/requests/assign-lesson-to-class.request';
import { ClassService } from './class.service';

@Controller('api/classes')
export class ClassController {
  constructor(private readonly classService: ClassService) { }

  @Get('get')
  getAll(): Promise<Class[]> {
    return this.classService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Class) {
    return this.classService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Class, @Param('id') id: string) {
    return this.classService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.classService.delete(id);
  }

  @Post('assign-lessons-to-class')
  assignLessonsToClass(@Body() request: AssignLessonToClassRequest) {
    return this.classService.assignLessonsToClass(request);
  }

}
