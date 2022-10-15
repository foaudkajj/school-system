import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Installment} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class InstallmentRepository extends BaseRepository<Installment> {
  constructor(
    @InjectRepository(Installment)
    private _: Repository<Installment>,
  ) {
    super();
    this.orm = _;
  }
}
