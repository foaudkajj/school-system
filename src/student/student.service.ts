import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Student } from 'src/models';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) { }
  getAll(): Promise<Student[]> {
    return this.studentRepository.orm.find();
  }

  insert(row: Student) {
    if ((/^ST/).test(row.serialNo)) {
      return this.studentRepository.orm.insert(row);
    } else {
      throw new HttpException(
        'ERROR.SERIAL_NO_NOT_VALID',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  update(row: Partial<Student>, id: string) {
    if (row.serialNo) {
      if ((/^ST/).test(row.serialNo))
        return this.studentRepository.orm.update({ id: id }, row);
      else {
        throw new HttpException(
          'ERROR.SERIAL_NO_NOT_VALID',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  delete(id: string) {
    return this.studentRepository.orm.delete({ id: id });
  }

  async getById(id: string) {
    return await this.studentRepository.orm.findOneBy({ id });
  }
}
