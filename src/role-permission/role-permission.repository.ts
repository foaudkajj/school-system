import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {RolePermission} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class RolePermissionRepository extends BaseRepository<RolePermission> {
  constructor(
    @InjectRepository(RolePermission)
    private _: Repository<RolePermission>,
  ) {
    super();
    this.orm = _;
  }
}
