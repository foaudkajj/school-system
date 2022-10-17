import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {GenericList} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class GenericListRepository extends BaseRepository<GenericList> {
  constructor(
    @InjectRepository(GenericList)
    private _: Repository<GenericList>,
  ) {
    super();
    this.orm = _;
  }
}
