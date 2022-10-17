import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentRepository } from './attachment/attachment.repository';
import { ClassRepository } from './class/class.repository';
import { GenericListItemRepository } from './generic-list-item/generic-list-item.repository';
import { GenericListRepository } from './generic-list/generic-list.repository';
import { InstallmentRepository } from './installment/installment.repository';
import { LessonRepository } from './lesson/lesson.repository';
import { Attachment, Class, GenericList, GenericListItem, Installment, Lesson, Student, StudentEvaluation, Teacher } from './models';
import { StudentEvaluationRepository } from './student-evaluation/student-evaluation.repository';
import { StudentRepository } from './student/student.repository';
import { TeacherRepository } from './teacher/teacher.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentEvaluation, Installment, Attachment, Teacher, GenericList, GenericListItem, Class, Lesson])],
  controllers: [],
  providers: [StudentRepository, StudentEvaluationRepository, InstallmentRepository, AttachmentRepository, TeacherRepository, GenericListRepository, GenericListItemRepository, ClassRepository, LessonRepository],
  exports: [StudentRepository, StudentEvaluationRepository, InstallmentRepository, AttachmentRepository, TeacherRepository, GenericListRepository, GenericListItemRepository, ClassRepository, LessonRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule { }
