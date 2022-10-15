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
  import {StudentEvaluation} from 'src/models';
import { StudentEvaluationService } from './student-evaluation.service';
  
  @Controller('student-evaluation')
  export class StudentEvaluationController {
    constructor(private readonly studentEvaluationService: StudentEvaluationService) {}
  
    @Get('get')
    getAll(): Promise<StudentEvaluation[]> {
      return this.studentEvaluationService.getAll();
    }
  
    @Post('insert')
    insert(@Body() row: StudentEvaluation) {
      return this.studentEvaluationService.insert(row);
    }
  
    @Put('update/:id')
    @ApiParam({name: 'id'})
    update(@Body() row: StudentEvaluation, @Param('id') id: string) {
      return this.studentEvaluationService.update(row, id);
    }
  
    @Delete('delete/:id')
    @ApiParam({name: 'id'})
    delete(@Param('id') id: string) {
      return this.studentEvaluationService.delete(id);
    }
  }
  