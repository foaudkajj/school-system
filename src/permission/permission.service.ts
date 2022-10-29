import {Injectable} from '@nestjs/common';
import {Permission} from 'src/models';
import { PermissionRepository } from './permission.repository';

@Injectable()
export class PermissionService {
  constructor(private permissionRepository: PermissionRepository) {}
  getAll(): Promise<Permission[]> {
    return this.permissionRepository.orm.find();
  }

  insert(row: Permission) {
    return this.permissionRepository.orm.insert(row);
  }

  update(row: Partial<Permission>, id: string) {
    return this.permissionRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.permissionRepository.orm.delete({id: id});
  }
}
