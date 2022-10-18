import { Injectable } from '@nestjs/common';
import { Lesson } from 'src/models';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(private lessonRepository: LessonRepository) { }
  getAll(): Promise<Lesson[]> {
    return this.lessonRepository.orm.find();
  }

  insert(row: Lesson) {
    return this.lessonRepository.orm.insert(row);
  }

  update(row: Partial<Lesson>, id: string) {
    return this.lessonRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.lessonRepository.orm.delete({ id: id });
  }
}
