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
import {Student} from 'src/models';
import { Permissions } from 'src/models/enums';
import {StudentService} from './student.service';

@Controller('api/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Roles(Permissions.SHOW_STUDENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getAll(): Promise<Student[]> {
    return this.studentService.getAll();
  }
  
  @Roles(Permissions.ADD_STUDENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('insert')
  insert(@Body() row: Student) { 
    return this.studentService.insert(row);
  }

  @Roles(Permissions.UPDATE_STUDENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Student, @Param('id') id: string) {
    return this.studentService.update(row, id);
  }

  @Roles(Permissions.DELETE_STUDENTS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.studentService.delete(id);
  }
}
