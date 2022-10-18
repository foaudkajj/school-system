import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Lesson} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class LessonRepository extends BaseRepository<Lesson> {
  constructor(
    @InjectRepository(Lesson)
    private _: Repository<Lesson>,
  ) {
    super();
    this.orm = _;
  }
}
