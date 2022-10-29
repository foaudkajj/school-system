import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Role} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class RoleRepository extends BaseRepository<Role> {
  constructor(
    @InjectRepository(Role)
    private _: Repository<Role>,
  ) {
    super();
    this.orm = _;
  }
}
