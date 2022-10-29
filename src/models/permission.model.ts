import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Permission {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ length: 1000, name: 'description' })
    @ApiProperty({ required: false, type: 'string' })
    description: string;
}
