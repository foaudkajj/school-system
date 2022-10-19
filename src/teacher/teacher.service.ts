import { Injectable } from '@nestjs/common';
import { Teacher } from 'src/models';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) { }
  getAll(): Promise<Teacher[]> {
    return this.teacherRepository.orm.find();
  }

  insert(row: Teacher) {
    return this.teacherRepository.orm.insert(row);
  }

  update(row: Partial<Teacher>, id: string) {
    return this.teacherRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.teacherRepository.orm.delete({ id: id });
  }

  async getById(id: string) {
    return await this.teacherRepository.orm.findOneBy({ id });
  }
}
