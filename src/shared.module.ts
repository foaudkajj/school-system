import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Student, StudentEvaluation} from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import {StudentRepository} from './student/student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student,StudentEvaluation])],
  controllers: [],
  providers: [StudentRepository,StudentEvaluationRepository],
  exports: [StudentRepository,StudentEvaluationRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
