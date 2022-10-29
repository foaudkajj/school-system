import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.model';
import { Role } from './role.model';

@Entity()
export class RolePermission {
  
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ name: 'role_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  roleId: string;

  @Column({ name: 'permission_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  permissionId: string;

  @ManyToOne(() => Role, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Permission, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;
}
