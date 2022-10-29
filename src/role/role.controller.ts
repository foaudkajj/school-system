import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Role} from 'src/models';
import { RoleService } from './role.service';

@Controller('api/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('get')
  getAll(): Promise<Role[]> {
    return this.roleService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Role) {
    return this.roleService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Role, @Param('id') id: string) {
    return this.roleService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.roleService.delete(id);
  }
}
