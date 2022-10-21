import {ApiProperty} from '@nestjs/swagger';

export class AssignLessonToClassRequest {
  @ApiProperty({required: true, type: 'string', format: 'uuid'})
  classId: string;

  @ApiProperty({
    required: true,
    type: 'array',
    items: {type: 'string', format: 'uuid'},
  })
  lessonIdList: string[];
}
