import {ApiProperty} from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ClassLesson {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({name: 'class_id'})
  @ApiProperty({required: true, format: 'uuid'})
  classId: string;

  @Column({name: 'lesson_id'})
  @ApiProperty({required: true, format: 'uuid'})
  lessonId: string;
}
