import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.model';

export enum Attendance {
    Available = "Available",
    Late = "Late",
    Absent = "Absent"
}

export enum Evaluation {
    Good = "Good",
    Mid = "Mid",
    Bad = "Bad"
}

@Entity()
export class StudentEvaluation {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'date' })
    @ApiProperty({ required: true })
    date: Date;

    @Column({ name: 'attendance', type: 'enum', enum: Attendance })
    @ApiProperty({ required: false, enum: Attendance })
    attendance: Attendance;

    @Column({ name: 'participation', type: 'enum', enum: Evaluation })
    @ApiProperty({ required: false, enum: Evaluation })
    participation: Evaluation;

    @Column({ name: 'homework', type: 'enum', enum: Evaluation })
    @ApiProperty({ required: false, enum: Evaluation })
    homework: Evaluation;

    @Column({ name: 'behaviour', type: 'enum', enum: Evaluation })
    @ApiProperty({ required: false, enum: Evaluation })
    behaviour: Evaluation;

    @Column({name: 'note' })
    @ApiProperty({ required: false, type: 'text' })
    note: string;

    @Column({ name: 'student_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    studentId: string;

    @ManyToOne(() => Student, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'student_id' })
    student: Student;
}
