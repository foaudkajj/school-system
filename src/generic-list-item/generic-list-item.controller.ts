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
import { GenericListItem } from 'src/models';
import { GenericListItemService } from './generic-list-item.service';

@Controller('api/generic-list-items')
export class GenericListItemController {
  constructor(private readonly genericListItemService: GenericListItemService) { }

  @Get('get')
  getAll(): Promise<GenericListItem[]> {
    return this.genericListItemService.getAll();
  }

  @Post('insert')
  insert(@Body() row: GenericListItem) {
    return this.genericListItemService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: GenericListItem, @Param('id') id: string) {
    return this.genericListItemService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.genericListItemService.delete(id);
  }
}
