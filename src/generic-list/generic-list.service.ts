import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenericList } from 'src/models';
import { GenericListRepository } from './generic-list.repository';

@Injectable()
export class GenericListService {
  constructor(private genericListRepository: GenericListRepository) { }
  getAll(): Promise<GenericList[]> {
    return this.genericListRepository.orm.find();
  }

  async getById(id: string): Promise<GenericList> {
    const genericList = await this.genericListRepository.orm.findOne({ where: { id }, relations: { items: true } });
    if (!genericList) {
      throw new HttpException(
        'ERROR.LIST_NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }
    return genericList;
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
