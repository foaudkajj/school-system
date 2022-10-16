import { Injectable } from '@nestjs/common';
import { GenericList } from 'src/models';
import { GenericListRepository } from './generic-list.repository';

@Injectable()
export class GenericListService {
  constructor(private genericListRepository: GenericListRepository) { }
  getAll(): Promise<GenericList[]> {
    return this.genericListRepository.orm.find();
  }

  insert(row: GenericList) {
    return this.genericListRepository.orm.insert(row);
  }

  update(row: Partial<GenericList>, id: string) {
    return this.genericListRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.genericListRepository.orm.delete({ id: id });
  }
}
