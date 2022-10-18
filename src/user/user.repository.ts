import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {User} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User)
    private _: Repository<User>,
  ) {
    super();
    this.orm = _;
  }
}
