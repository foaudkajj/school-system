import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Course} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CourseRepository extends BaseRepository<Course> {
  constructor(
    @InjectRepository(Course)
    private _: Repository<Course>,
  ) {
    super();
    this.orm = _;
  }
}
