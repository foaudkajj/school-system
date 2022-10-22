import {Injectable} from '@nestjs/common';
import {Class, ClassLesson} from 'src/models';
import {AssignLessonToClassRequest} from 'src/models/requests/assign-lesson-to-class.request';
import {ClassLessonRepository} from './class-lesson.repository';
import {ClassRepository} from './class.repository';
import {v4 as uuid} from 'uuid';

@Injectable()
export class ClassService {
  constructor(
    private classRepository: ClassRepository,
    private classLessonRepository: ClassLessonRepository,
  ) {}
  getAll(): Promise<Class[]> {
    return this.classRepository.orm.find();
  }

  insert(row: Class) {
    return this.classRepository.orm.insert(row);
  }

  update(row: Partial<Class>, id: string) {
    return this.classRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.classRepository.orm.delete({id: id});
  }

  async assignLessonsToClass(req: AssignLessonToClassRequest) {
    await this.classLessonRepository.orm.delete(req.classId);
    const classLessonList: ClassLesson[] = req.lessonIdList.map(lessonId => {
      return {id: uuid(), classId: req.classId, lessonId: lessonId};
    });

    await this.classLessonRepository.orm.insert(classLessonList);
  }
}
