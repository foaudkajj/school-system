import { Injectable } from '@nestjs/common';
import { Course } from 'src/models';
import { CourseRepository } from './course.repository';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) { }
  getAll(): Promise<Course[]> {
    return this.courseRepository.orm.find();
  }

  insert(row: Course) {
    return this.courseRepository.orm.insert(row);
  }

  update(row: Partial<Course>, id: string) {
    return this.courseRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.courseRepository.orm.delete({ id: id });
  }
}
