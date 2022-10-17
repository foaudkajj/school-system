import {Injectable} from '@nestjs/common';
import {StudentEvaluation} from 'src/models';
import { StudentEvaluationRepository } from './student-evaluation.repository';

@Injectable()
export class StudentEvaluationService {
  constructor(private studentEvaluationRepository: StudentEvaluationRepository) {}
  getAll(): Promise<StudentEvaluation[]> {
    return this.studentEvaluationRepository.orm.find();
  }

  insert(row: StudentEvaluation) {
    return this.studentEvaluationRepository.orm.insert(row);
  }

  update(row: Partial<StudentEvaluation>, id: string) {
    return this.studentEvaluationRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.studentEvaluationRepository.orm.delete({id: id});
  }
}
