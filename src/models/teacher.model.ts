import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Gender} from './enums';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 100, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @Column({length: 100, name: 'surname'})
  @ApiProperty({required: true, type: 'string'})
  surname: string;

  @Column({length: 100, name: 'tr_name'})
  @ApiProperty({required: true, type: 'string'})
  trName: string;

  @Column({length: 100, name: 'tr_surname'})
  @ApiProperty({required: true, type: 'string'})
  trSurname: string;

  @Column({name: 'gender', type: 'enum', enum: Gender})
  @ApiProperty({required: true, enum: Gender})
  gender: Gender;

  @Column({length: 25, name: 'gsm'})
  @ApiProperty({required: false, type: 'string'})
  gsm: string;

  @Column({length: 20, name: 'identity_no'})
  @ApiProperty({required: true, type: 'string'})
  identityNo: string;
}
