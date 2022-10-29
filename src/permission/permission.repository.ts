import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Permission} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class PermissionRepository extends BaseRepository<Permission> {
  constructor(
    @InjectRepository(Permission)
    private _: Repository<Permission>,
  ) {
    super();
    this.orm = _;
  }
}
