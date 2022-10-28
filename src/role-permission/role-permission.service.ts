import {Injectable} from '@nestjs/common';
import {RolePermission} from 'src/models';
import { RolePermissionRepository } from './role-permission.repository';

@Injectable()
export class RolePermissionService {
  constructor(private rolePermissionRepository: RolePermissionRepository) {}
  getAll(): Promise<RolePermission[]> {
    return this.rolePermissionRepository.orm.find();
  }

  insert(row: RolePermission) {
    return this.rolePermissionRepository.orm.insert(row);
  }

  update(row: Partial<RolePermission>, id: string) {
    return this.rolePermissionRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.rolePermissionRepository.orm.delete({id: id});
  }
}
