import { Injectable } from '@nestjs/common';
import { Attachment } from 'src/models';
import { AttachmentRepository } from './attachment.repository';

@Injectable()
export class AttachmentService {
  constructor(private attachmentRepository: AttachmentRepository) { }
  getAll(): Promise<Attachment[]> {
    return this.attachmentRepository.orm.find();
  }

  insert(row: Attachment) {
    return this.attachmentRepository.orm.insert(row);
  }

  update(row: Partial<Attachment>, id: string) {
    return this.attachmentRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.attachmentRepository.orm.delete({ id: id });
  }
}
