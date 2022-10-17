import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { StudentEvaluation } from 'src/models';
import { StudentEvaluationRepository } from './student-evaluation.repository';

@Injectable()
export class StudentEvaluationService {
  constructor(private studentEvaluationRepository: StudentEvaluationRepository) { }
  getAll(): Promise<StudentEvaluation[]> {
    return this.studentEvaluationRepository.orm.find();
  }

  async insert(row: StudentEvaluation) {
    const studentEvaluations = await this.studentEvaluationRepository.orm.findBy({ studentId: row.studentId });
    studentEvaluations.forEach((evaluation) => {
      const monthDifference = new Date(evaluation.date).getMonth() - new Date(row.date).getMonth();
      if (monthDifference === 0) {
        throw new HttpException('ERROR.STUDENT_ALREADY_EVALUATED', HttpStatus.BAD_REQUEST);
      }
    });
    return this.studentEvaluationRepository.orm.insert(row);
  }

  update(row: Partial<StudentEvaluation>, id: string) {
    return this.studentEvaluationRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.studentEvaluationRepository.orm.delete({ id: id });
  }
}
