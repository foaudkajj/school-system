import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EducationType } from './enums';

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
}
