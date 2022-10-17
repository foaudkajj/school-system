import { Injectable } from '@nestjs/common';
import { GenericListItem } from 'src/models';
import { GenericListItemRepository } from './generic-list-item.repository';

@Injectable()
export class GenericListItemService {
  constructor(private genericListItemRepository: GenericListItemRepository) { }
  getAll(): Promise<GenericListItem[]> {
    return this.genericListItemRepository.orm.find();
  }

  insert(row: GenericListItem) {
    return this.genericListItemRepository.orm.insert(row);
  }

  update(row: Partial<GenericListItem>, id: string) {
    return this.genericListItemRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.genericListItemRepository.orm.delete({ id: id });
  }
}
