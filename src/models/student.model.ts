import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({length: 100, name: 'name'})
  @ApiProperty()
  name: string;

  @Column({length: 100, name: 'last_name'})
  @ApiProperty()
  lastName: string;

  @Column({length: 15, name: 'phone_number'})
  @ApiProperty()
  phoneNumber: string;
}
