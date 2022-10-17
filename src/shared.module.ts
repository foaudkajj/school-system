import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentRepository } from './attachment/attachment.repository';
import { GenericListItemRepository } from './generic-list-item/generic-list-item.repository';
import { GenericListRepository } from './generic-list/generic-list.repository';
import { InstallmentRepository } from './installment/installment.repository';
import { Attachment, GenericList, GenericListItem, Installment, Student, StudentEvaluation, Teacher, User } from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import { StudentRepository } from './student/student.repository';
import { TeacherRepository } from './teacher/teacher.repository';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentEvaluation, Installment, Attachment, Teacher, GenericList, GenericListItem, User])],
  controllers: [],
  providers: [StudentRepository, StudentEvaluationRepository, InstallmentRepository, AttachmentRepository, TeacherRepository, GenericListRepository, GenericListItemRepository, UserRepository],
  exports: [StudentRepository, StudentEvaluationRepository, InstallmentRepository, AttachmentRepository, TeacherRepository, GenericListRepository, GenericListItemRepository, UserRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule { }
