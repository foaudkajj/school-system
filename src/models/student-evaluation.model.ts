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

    @Column({ name: 'behaviout', type: 'enum', enum: Evaluation })
    @ApiProperty({ required: false, enum: Evaluation })
    behaviout: Evaluation;

    @Column({ name: 'fee', default: 0 })
    @ApiProperty({ required: true, type: 'number', format: 'double', default: 0 })
    fee: number;

    @Column({ name: 'discount' })
    @ApiProperty({ required: false, type: 'integer' })
    discount: number;

    @Column({ name: 'transport_fee'})
    @ApiProperty({ required: false, type: 'number', format: 'double'})
    transportFee: number;

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
