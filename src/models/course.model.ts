import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { GenericList } from '.';

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 1000, name: 'title' })
    @ApiProperty({ required: true, type: 'string' })
    title: string;

    @Column({ length: 100, name: 'trainer_name' })
    @ApiProperty({ required: true, type: 'string' })
    trainerName: string;

    @Column({ name: 'start_date' })
    @ApiProperty({ required: false })
    startDate: Date;

    @Column({ name: 'end_date' })
    @ApiProperty({ required: false })
    endDate: Date;

    @Column({ name: 'fee' })
    @ApiProperty({ required: false, type: 'number', format: 'double' })
    fee: number;

    @Column({ name: 'with_test', type: 'boolean', default: false })
    @ApiProperty({ required: true, type: 'boolean', default: false})
    withTest: boolean;

    @Column({ name: 'level_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    levelId: string;

    @ManyToOne(() => GenericList, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'level_id' })
    level: GenericList;
}
