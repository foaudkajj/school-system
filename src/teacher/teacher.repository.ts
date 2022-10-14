import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/base.repository';
import { Teacher } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherRepository extends BaseRepository<Teacher> {
  constructor(
    @InjectRepository(Teacher)
    private _: Repository<Teacher>,
  ) {
    super();
    this.orm = _;
  }
}
