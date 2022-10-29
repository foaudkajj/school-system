import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AttachmentRepository} from './attachment/attachment.repository';
import {CountryRepository} from './country/country.repository';
import {ClassRepository} from './class/class.repository';
import {GenericListItemRepository} from './generic-list-item/generic-list-item.repository';
import {GenericListRepository} from './generic-list/generic-list.repository';
import {InstallmentRepository} from './installment/installment.repository';
import {LessonRepository} from './lesson/lesson.repository';
import {
  Attachment,
  Country,
  Class,
  GenericList,
  GenericListItem,
  Installment,
  Lesson,
  Student,
  StudentEvaluation,
  Teacher,
  User,
  Course,
  CourseParticipant,
  ClassLesson,
  Role,
  Permission,
  RolePermission,
} from './models';
import {StudentEvaluationRepository} from './student-evaluation/student-evaluation.repository';
import {StudentRepository} from './student/student.repository';
import {TeacherRepository} from './teacher/teacher.repository';
import {UserRepository} from './user/user.repository';
import { CourseRepository } from './course/course.repository';
import { CourseParticipantRepository } from './course-participant/course-participant.repository';
import { ClassLessonRepository } from './class/class-lesson.repository';
import { RoleRepository } from './role/role.repository';
import { PermissionRepository } from './permission/permission.repository';
import { RolePermissionRepository } from './role-permission/role-permission.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Student,
      StudentEvaluation,
      Installment,
      Attachment,
      Teacher,
      GenericList,
      GenericListItem,
      Class,
      Lesson,
      User,
      Country,
      Course,
      CourseParticipant,
      ClassLesson,
      Role,
      Permission,
      RolePermission
    ]),
  ],
  controllers: [],
  providers: [
    StudentRepository,
    StudentEvaluationRepository,
    InstallmentRepository,
    AttachmentRepository,
    TeacherRepository,
    GenericListRepository,
    GenericListItemRepository,
    ClassRepository,
    LessonRepository,
    UserRepository,
    CountryRepository,
    CourseRepository,
    CourseParticipantRepository,
    ClassLessonRepository,
    RoleRepository,
    PermissionRepository,
    RolePermissionRepository
  ],
  exports: [
    StudentRepository,
    StudentEvaluationRepository,
    InstallmentRepository,
    AttachmentRepository,
    TeacherRepository,
    GenericListRepository,
    GenericListItemRepository,
    ClassRepository,
    LessonRepository,
    UserRepository,
    CountryRepository,
    CourseRepository,
    CourseParticipantRepository,
    ClassLessonRepository,
    RoleRepository,
    PermissionRepository,
    RolePermissionRepository
  ],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
