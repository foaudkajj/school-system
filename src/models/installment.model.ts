import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.model';

@Entity()
export class Installment {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'date' })
    @ApiProperty({ required: true })
    date: Date;

    @Column({ name: 'amount'})
    @ApiProperty({ required: true, type: 'number', format: 'double'})
    amount: number;

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
