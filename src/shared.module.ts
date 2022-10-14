import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AttachmentRepository } from './attachment/attachment.repository';
import { InstallmentRepository } from './installment/installment.repository';
import {Attachment, Installment, Student, StudentEvaluation, Teacher} from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import {StudentRepository} from './student/student.repository';
import { TeacherRepository } from './teacher/teacher.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student,StudentEvaluation,Installment,Attachment,Teacher])],
  controllers: [],
  providers: [StudentRepository,StudentEvaluationRepository,InstallmentRepository,AttachmentRepository,TeacherRepository],
  exports: [StudentRepository,StudentEvaluationRepository,InstallmentRepository,AttachmentRepository,TeacherRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
