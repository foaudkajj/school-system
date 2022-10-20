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
  import { CourseParticipant } from 'src/models';
import { CourseParticipantService } from './course-participant.service';
  
  @Controller('api/course-participants')
  export class CourseParticipantController {
    constructor(private readonly courseParticipantService: CourseParticipantService) { }
  
    @Get('get')
    getAll(): Promise<CourseParticipant[]> {
      return this.courseParticipantService.getAll();
    }
  
    @Post('insert')
    insert(@Body() row: CourseParticipant) {
      return this.courseParticipantService.insert(row);
    }
  
    @Put('update/:id')
    @ApiParam({ name: 'id' })
    update(@Body() row: CourseParticipant, @Param('id') id: string) {
      return this.courseParticipantService.update(row, id);
    }
  
    @Delete('delete/:id')
    @ApiParam({ name: 'id' })
    delete(@Param('id') id: string) {
      return this.courseParticipantService.delete(id);
    }
  }
  