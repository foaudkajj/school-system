import { Injectable } from '@nestjs/common';
import { Class } from 'src/models';
import { AssignLessonToClassRequest } from 'src/models/requests/assign-lesson-to-class.request';
import { ClassLessonRepository } from './class-lesson.repository';
import { ClassRepository } from './class.repository';

@Injectable()
export class ClassService {
  constructor(private classRepository: ClassRepository, private classLessonRepository: ClassLessonRepository) { }
  getAll(): Promise<Class[]> {
    return this.classRepository.orm.find();
  }

  insert(row: Class) {
    return this.classRepository.orm.insert(row);
  }

  update(row: Partial<Class>, id: string) {
    return this.classRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.classRepository.orm.delete({ id: id });
  }

  removeAssignedLessons(classId:string){
    return this.classLessonRepository.orm.delete({ classId });
  }

  async assignLessonsToClass(req: AssignLessonToClassRequest) {
    await this.removeAssignedLessons(req.classId);
    for (let i = 0; i < req.lessonIdList.length; i++) {
      this.classLessonRepository.orm.insert({ classId:req.classId, lessonId: req.lessonIdList[i] });
    }
  }
}
