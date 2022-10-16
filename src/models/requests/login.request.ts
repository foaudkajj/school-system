import {ApiProperty} from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({required: true, type: 'string'})
  username: string;

  @ApiProperty({required: true, type: 'string'})
  password: string;
}
