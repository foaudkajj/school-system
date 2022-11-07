import {ApiProperty} from '@nestjs/swagger';
import {UserType} from '../enums';

export class GetAllSubUsersResponse {
  @ApiProperty({required: true, format: 'uuid'})
  id: string;
  @ApiProperty({required: true, type: 'string'})
  name: string;
  @ApiProperty({required: true, type: 'string'})
  surname: string;
  @ApiProperty({enum: UserType})
  type: UserType;
}
