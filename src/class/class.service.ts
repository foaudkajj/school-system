import { Injectable } from '@nestjs/common';
import { Class } from 'src/models';
import { ClassRepository } from './class.repository';

@Injectable()
export class ClassService {
  constructor(private classRepository: ClassRepository) { }
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
}
