import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AttachmentRepository } from './attachment/attachment.repository';
import { InstallmentRepository } from './installment/installment.repository';
import {Attachment, Installment, Student, StudentEvaluation} from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import {StudentRepository} from './student/student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student,StudentEvaluation,Installment,Attachment])],
  controllers: [],
  providers: [StudentRepository,StudentEvaluationRepository,InstallmentRepository,AttachmentRepository],
  exports: [StudentRepository,StudentEvaluationRepository,InstallmentRepository,AttachmentRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
