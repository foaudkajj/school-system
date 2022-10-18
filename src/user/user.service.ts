import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from 'src/models';
import {Not} from 'typeorm';
import {UserRepository} from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  async insert(row: User) {
    const isExist = await this.userRepository.orm.findOneBy({rowId: row.rowId});
    if (isExist) {
      throw new HttpException(
        'ERROR.USER_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userRepository.orm.insert(row);
  }

  async update(row: Partial<User>, id: string) {
    const isExist = await this.userRepository.orm.findOneBy({
      rowId: row.rowId,
      id: Not(id),
    });
    if (isExist) {
      throw new HttpException(
        'ERROR.USER_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({id: id});
  }
}
