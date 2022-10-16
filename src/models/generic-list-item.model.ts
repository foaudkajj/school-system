import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GenericList } from './generic-list.model';

@Entity()
export class GenericListItem {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ name: 'list_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    listId: string;

    @ManyToOne(() => GenericList, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'list_id' })
    list: GenericList;
}
