import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from './class.model';

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @ManyToMany(() => Class, (Class) => Class.lessons)
    @JoinTable({name: 'class_lesson'})
    classes: Class[];
}
