import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';

import {Roles} from 'src/decorators/roles.decorator';
import {StudentEvaluation} from 'src/models';
import {Permissions} from 'src/models/enums';
import {StudentEvaluationService} from './student-evaluation.service';

@Controller('api/student-evaluation')
export class StudentEvaluationController {
  constructor(
    private readonly studentEvaluationService: StudentEvaluationService,
  ) {}

  @Roles(Permissions.SHOW_STU_EVALUATIONS)
  @Get('get')
  getAll(): Promise<StudentEvaluation[]> {
    return this.studentEvaluationService.getAll();
  }

  @Roles(Permissions.ADD_STU_EVALUATIONS)
  @Post('insert')
  insert(@Body() row: StudentEvaluation) {
    return this.studentEvaluationService.insert(row);
  }

  @Roles(Permissions.UPDATE_STU_EVALUATIONS)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: StudentEvaluation, @Param('id') id: string) {
    return this.studentEvaluationService.update(row, id);
  }

  @Roles(Permissions.DELETE_STU_EVALUATIONS)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.studentEvaluationService.delete(id);
  }
}
