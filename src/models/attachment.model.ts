import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './enums';

@Entity()
export class Attachment {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ length: 1024, name: 'uri' })
    @ApiProperty({ required: true, type: 'string' })
    uri: string;

    @Column({ name: 'uploaded_at' })
    @ApiProperty({ required: true })
    uploadedAt: Date;

    @Column({ name: 'object_id' })
    @ApiProperty({ required: true })
    objectId: string;

    @Column({ name: 'type', type: 'enum', enum: Type })
    @ApiProperty({ required: true, enum: Type })
    type: Type;
}
