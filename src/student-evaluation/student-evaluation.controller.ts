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
import { ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { StudentEvaluation } from 'src/models';
import { Permissions } from 'src/models/enums';
import { StudentEvaluationService } from './student-evaluation.service';

@Controller('api/student-evaluation')
export class StudentEvaluationController {
  constructor(private readonly studentEvaluationService: StudentEvaluationService) { }


  @Roles(Permissions.SHOW_STU_EVALUATIONS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getAll(): Promise<StudentEvaluation[]> {
    return this.studentEvaluationService.getAll();
  }

  @Roles(Permissions.ADD_STU_EVALUATIONS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('insert')
  insert(@Body() row: StudentEvaluation) {
    return this.studentEvaluationService.insert(row);
  }

  @Roles(Permissions.UPDATE_STU_EVALUATIONS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: StudentEvaluation, @Param('id') id: string) {
    return this.studentEvaluationService.update(row, id);
  }

  @Roles(Permissions.DELETE_STU_EVALUATIONS)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.studentEvaluationService.delete(id);
  }
}
