import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { User } from 'src/models';
import { UserType } from 'src/models/enums';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get('get')
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post('insert')
  insert(@Body() row: User) {
    return this.userService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: User, @Param('id') id: string) {
    return this.userService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Get('get/:user_type')
  @ApiParam({ name: 'user_type' })
  getByUserType( @Param('user_type') userType: UserType) {
    if(!Object.values(UserType).includes(userType)){
      throw new HttpException(
        'ERROR.BAD_REQUEST',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.getByUserType(userType);
  }
}

