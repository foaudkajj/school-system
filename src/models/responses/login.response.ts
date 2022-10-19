import {ApiProperty} from '@nestjs/swagger';
import {UserStatus, UserType} from '../enums';

export class LoginResponse {
  @ApiProperty({type: 'token'})
  token: string;

  @ApiProperty({type: 'string'})
  username: string;

  @ApiProperty({enum: UserType})
  userType: UserType;

  @ApiProperty({enum: UserStatus})
  status: UserStatus;

  @ApiProperty({type: 'string'})
  name: string;

  @ApiProperty({type: 'string'})
  surname: string;

  @ApiProperty({type: 'string'})
  trName: string;

  @ApiProperty({type: 'string'})
  trSurname: string;
}
