import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Teacher } from 'src/models';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) { }
  getAll(): Promise<Teacher[]> {
    return this.teacherRepository.orm.find();
  }

  insert(row: Teacher) {

    if ((/^TE/).test(row.serialNo)) {
      return this.teacherRepository.orm.insert(row);
    } else {
      throw new HttpException(
        'ERROR.SERIAL_NO_NOT_VALID',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  update(row: Partial<Teacher>, id: string) {
    if (row.serialNo) {
      if ((/^TE/).test(row.serialNo))
        return this.teacherRepository.orm.update({ id: id }, row);
      else {
        throw new HttpException(
          'ERROR.SERIAL_NO_NOT_VALID',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  delete(id: string) {
    return this.teacherRepository.orm.delete({ id: id });
  }

  async getById(id: string) {
    return await this.teacherRepository.orm.findOneBy({ id });
  }
}
