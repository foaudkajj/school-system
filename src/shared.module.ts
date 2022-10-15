import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { InstallmentRepository } from './installment/installment.repository';
import {Installment, Student, StudentEvaluation} from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import {StudentRepository} from './student/student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student,StudentEvaluation,Installment])],
  controllers: [],
  providers: [StudentRepository,StudentEvaluationRepository,InstallmentRepository],
  exports: [StudentRepository,StudentEvaluationRepository,InstallmentRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
