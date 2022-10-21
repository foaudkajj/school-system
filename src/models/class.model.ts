import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EducationType } from './enums';
import { Lesson } from './lesson.model';

@Entity()
export class Class {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ name: 'education_type', type: 'enum', enum: EducationType })
    @ApiProperty({ required: true, enum: EducationType })
    educationType: EducationType;

    @ManyToMany(() => Lesson, (lesson) => lesson.classes)
    @JoinTable({name: 'class_lesson'})
    lessons: Lesson[];
}
