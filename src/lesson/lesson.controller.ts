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
import { Lesson } from 'src/models';
import { LessonService } from './lesson.service';

@Controller('api/lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) { }

  @Get('get')
  getAll(): Promise<Lesson[]> {
    return this.lessonService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Lesson) {
    return this.lessonService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Lesson, @Param('id') id: string) {
    return this.lessonService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.lessonService.delete(id);
  }
}
