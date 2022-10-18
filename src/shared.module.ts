import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AttachmentRepository } from './attachment/attachment.repository';
import { ClassRepository } from './class/class.repository';
import { GenericListItemRepository } from './generic-list-item/generic-list-item.repository';
import { GenericListRepository } from './generic-list/generic-list.repository';
import { InstallmentRepository } from './installment/installment.repository';
import {Attachment, Class, GenericList, GenericListItem, Installment, Student, StudentEvaluation, Teacher} from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import {StudentRepository} from './student/student.repository';
import { TeacherRepository } from './teacher/teacher.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student,StudentEvaluation,Installment,Attachment,Teacher, GenericList, GenericListItem,Class])],
  controllers: [],
  providers: [StudentRepository,StudentEvaluationRepository,InstallmentRepository,AttachmentRepository,TeacherRepository,GenericListRepository,GenericListItemRepository,ClassRepository],
  exports: [StudentRepository,StudentEvaluationRepository,InstallmentRepository,AttachmentRepository,TeacherRepository,GenericListRepository,GenericListItemRepository,ClassRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
