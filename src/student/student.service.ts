import { Injectable } from '@nestjs/common';
import { Student } from 'src/models';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) { }
  getAll(): Promise<Student[]> {
    return this.studentRepository.orm.find();
  }

  insert(row: Student) {
    return this.studentRepository.orm.insert(row);
  }

  update(row: Partial<Student>, id: string) {
    return this.studentRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.studentRepository.orm.delete({ id: id });
  }

  async getById(id: string) {
    return await this.studentRepository.orm.findOneBy({ id });
  }
}
