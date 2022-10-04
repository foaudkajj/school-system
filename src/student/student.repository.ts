import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Student} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class StudentRepository extends BaseRepository<Student> {
  constructor(
    @InjectRepository(Student)
    private _: Repository<Student>,
  ) {
    super();
    this.orm = _;
  }
}
