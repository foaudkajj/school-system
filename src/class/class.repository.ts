import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Class} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class ClassRepository extends BaseRepository<Class> {
  constructor(
    @InjectRepository(Class)
    private _: Repository<Class>,
  ) {
    super();
    this.orm = _;
  }
}
