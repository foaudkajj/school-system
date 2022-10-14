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
import {Teacher} from 'src/models';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('get')
  getAll(): Promise<Teacher[]> {
    return this.teacherService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Teacher) {
    return this.teacherService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Teacher, @Param('id') id: string) {
    return this.teacherService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.teacherService.delete(id);
  }
}
