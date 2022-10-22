import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {ClassLesson} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class ClassLessonRepository extends BaseRepository<ClassLesson> {
  constructor(
    @InjectRepository(ClassLesson)
    private _: Repository<ClassLesson>,
  ) {
    super();
    this.orm = _;
  }
}
