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
import { Attachment } from 'src/models';
import { AttachmentService } from './attachment.service';

@Controller('api/attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) { }

  @Get('get')
  getAll(): Promise<Attachment[]> {
    return this.attachmentService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Attachment) {
    return this.attachmentService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Attachment, @Param('id') id: string) {
    return this.attachmentService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.attachmentService.delete(id);
  }
}
