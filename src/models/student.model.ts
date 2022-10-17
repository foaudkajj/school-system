import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country, GenericList } from '.';
import { Gender } from './enums';

export enum EducationType {
  PreSchool = 'PreSchool',
  School = 'School',
  Course = 'Course'
}

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 50, name: 'name' })
  @ApiProperty({ required: true, type: 'string' })
  name: string;

  @Column({ length: 50, name: 'surname' })
  @ApiProperty({ required: true, type: 'string' })
  surname: string;

  @Column({ length: 100, name: 'tr_name' })
  @ApiProperty({ required: true, type: 'string' })
  trName: string;

  @Column({ length: 100, name: 'tr_surname' })
  @ApiProperty({ required: true, type: 'string' })
  trSurname: string;

  @Column({ name: 'age' })
  @ApiProperty({ required: false, type: 'integer' })
  age: number;

  @Column({ length: 100, name: 'father_name' })
  @ApiProperty({ required: false, type: 'string' })
  fatherName: string;

  @Column({ length: 20, name: 'father_number' })
  @ApiProperty({ required: false, type: 'string' })
  fatherNumber: string;

  @Column({ length: 100, name: 'mother_name' })
  @ApiProperty({ required: false, type: 'string' })
  motherName: string;

  @Column({ length: 20, name: 'mother_number' })
  @ApiProperty({ required: false, type: 'string' })
  motherNumber: string;

  @Column({ length: 20, name: 'gsm' })
  @ApiProperty({ required: false, type: 'string' })
  gsm: string;

  @Column({ length: 20, name: 'identity_no' })
  @ApiProperty({ required: false, type: 'string' })
  identityNo: string;

  @Column({ length: 1000, name: 'address' })
  @ApiProperty({ required: false, type: 'string' })
  address: string;

  @Column({ name: 'gender', type: 'enum', enum: Gender })
  @ApiProperty({ required: true, enum: Gender })
  gender: Gender;

  @Column({ name: 'education_type', type: 'enum', enum: EducationType })
  @ApiProperty({ required: true, enum: EducationType })
  educationType: EducationType;

  @Column({ name: 'nationality' })
  @ApiProperty({ required: true, format: 'uuid' })
  nationality: string;

  @Column({ name: 'document_type' })
  @ApiProperty({ required: true, format: 'uuid' })
  documentType: string;
  
  @ManyToOne(() => Country, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'nationality' })
  country: Country;
  
  @ManyToOne(() => GenericList, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'document_type' })
  genericList: GenericList;
}
