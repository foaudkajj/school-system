import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Attachment} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class AttachmentRepository extends BaseRepository<Attachment> {
  constructor(
    @InjectRepository(Attachment)
    private _: Repository<Attachment>,
  ) {
    super();
    this.orm = _;
  }
}
