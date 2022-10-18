import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus, UserType } from './enums';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'type', type: 'enum', enum: UserType })
    @ApiProperty({ required: true, enum: UserType })
    type: UserType;

    @Column({ name: 'row_id', type: 'uuid' })
    @ApiProperty({ required: true, format: 'uuid' })
    rowId: string;

    @Column({ length: 50, name: 'username' })
    @ApiProperty({ required: true, type: 'string' })
    username: string;

    @Column({ length: 50, name: 'password' })
    @ApiProperty({ required: true, type: 'string' })
    password: string;

    @Column({ length: 255, name: 'salt' })
    @ApiProperty({ required: false, type: 'string' })
    salt: string;

    @Column({ name: 'status', type: 'enum', enum: UserStatus })
    @ApiProperty({ required: false, enum: UserStatus })
    status: UserStatus;

}
