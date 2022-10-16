import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,

} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { GenericList } from 'src/models';
import { GenericListService } from './generic-list.service';

@Controller('api/generic-lists')
export class GenericListController {
  constructor(private readonly genericListService: GenericListService) { }

  @Get('get')
  getAll(): Promise<GenericList[]> {
    return this.genericListService.getAll();
  }

  @Post('insert')
  insert(@Body() row: GenericList) {
    return this.genericListService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: GenericList, @Param('id') id: string) {
    return this.genericListService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.genericListService.delete(id);
  }
}
