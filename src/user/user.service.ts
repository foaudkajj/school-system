import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { genSaltSync, hashSync } from 'bcryptjs';
import { User } from 'src/models';
import { UserType } from 'src/models/enums';
import { Not } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) { }
  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  async insert(row: User) {
    const isExist = await this.userRepository.orm.findOneBy({ rowId: row.rowId });
    if (isExist) {
      throw new HttpException(
        'ERROR.USER_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
    }
    const regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/ ;
    if (!regex.test(row.username)) {
      throw new HttpException(
        'ERROR.USERNAME_NOT_VALID',
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = genSaltSync();
    const hashpassword = hashSync(row.password, salt);
    row.password = hashpassword;
    return this.userRepository.orm.insert(row);
  }

  async update(row: Partial<User>, id: string) {
    if (row.rowId) {
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
    }

    if (row.username) {
      const regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
      if (!regex.test(row.username)) {
        throw new HttpException(
          'ERROR.USERNAME_NOT_VALID',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if (row.password) {
      const salt = genSaltSync();
      const hashpassword = hashSync(row.password, salt);
      row.password = hashpassword;
    }
    
    return this.userRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({ id: id });
  }

  findOneByUsername(username: string) {
    return this.userRepository.orm.findOne({
      where: { username: username },
      relations: {
        role: {
          rolePermissions: {
            permission: true,
          },
        },
      },
    });
  }

  getByUserType(userType: UserType) {
    return this.userRepository.orm.find({ where: { type: userType } });
  }
}
