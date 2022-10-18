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
import { Course } from 'src/models';
import { CourseService } from './course.service';

@Controller('api/courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) { }

  @Get('get')
  getAll(): Promise<Course[]> {
    return this.courseService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Course) {
    return this.courseService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Course, @Param('id') id: string) {
    return this.courseService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.courseService.delete(id);
  }
}
