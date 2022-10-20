import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {CourseParticipant} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CourseParticipantRepository extends BaseRepository<CourseParticipant> {
  constructor(
    @InjectRepository(CourseParticipant)
    private _: Repository<CourseParticipant>,
  ) {
    super();
    this.orm = _;
  }
}
