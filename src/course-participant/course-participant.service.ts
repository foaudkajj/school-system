import { Injectable } from '@nestjs/common';
import { CourseParticipant } from 'src/models';
import { CourseParticipantRepository } from './course-participant.repository';

@Injectable()
export class CourseParticipantService {
  constructor(private courseParticipantRepository: CourseParticipantRepository) { }
  getAll(): Promise<CourseParticipant[]> {
    return this.courseParticipantRepository.orm.find();
  }

  insert(row: CourseParticipant) {
    return this.courseParticipantRepository.orm.insert(row);
  }

  update(row: Partial<CourseParticipant>, id: string) {
    return this.courseParticipantRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.courseParticipantRepository.orm.delete({ id: id });
  }
}
