import {Injectable} from '@nestjs/common';
import {Role} from 'src/models';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository) {}
  getAll(): Promise<Role[]> {
    return this.roleRepository.orm.find();
  }

  insert(row: Role) {
    return this.roleRepository.orm.insert(row);
  }

  update(row: Partial<Role>, id: string) {
    return this.roleRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.roleRepository.orm.delete({id: id});
  }
}
