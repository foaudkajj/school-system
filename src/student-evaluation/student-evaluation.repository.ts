import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {StudentEvaluation} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class StudentEvaluationRepository extends BaseRepository<StudentEvaluation> {
  constructor(
    @InjectRepository(StudentEvaluation)
    private _: Repository<StudentEvaluation>,
  ) {
    super();
    this.orm = _;
  }
}
