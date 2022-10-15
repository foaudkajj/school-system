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
import {Student} from 'src/models';
import {StudentService} from './student.service';

@Controller('api/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('get')
  getAll(): Promise<Student[]> {
    return this.studentService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Student) {
    return this.studentService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Student, @Param('id') id: string) {
    return this.studentService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.studentService.delete(id);
  }
}
