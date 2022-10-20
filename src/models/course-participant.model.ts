import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from './enums';
import { Course } from './course.model';

@Entity()
export class CourseParticipant {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ length: 100, name: 'surname' })
    @ApiProperty({ required: false, type: 'string' })
    surname: string;

    @Column({ length: 100, name: 'tr_name' })
    @ApiProperty({ required: true, type: 'string' })
    trName: string;

    @Column({ length: 100, name: 'tr_surname' })
    @ApiProperty({ required: false, type: 'string' })
    trSurname: string;

    @Column({ name: 'gender', type: 'enum', enum: Gender })
    @ApiProperty({ required: true, enum: Gender })
    gender: Gender;

    @Column({ length: 25, name: 'gsm' })
    @ApiProperty({ required: false, type: 'string' })
    gsm: string;

    @Column({ name: 'test_passed', type: 'boolean', default: false })
    @ApiProperty({ required: false, type: 'boolean', default: false })
    testPassed: boolean;

    @Column({ name: 'test_mark' })
    @ApiProperty({ required: false, type: 'integer' })
    testMark: number;

    @Column({ name: 'certificate_received', type: 'boolean', default: false })
    @ApiProperty({ required: false, type: 'boolean', default: false })
    certificateReceived: boolean;

    @Column({ name: 'course_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    courseId: string;

    @ManyToOne(() => Course, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'course_id' })
    course: Course;
}
