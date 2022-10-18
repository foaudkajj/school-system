import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Country} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CountryRepository extends BaseRepository<Country> {
  constructor(
    @InjectRepository(Country)
    private _: Repository<Country>,
  ) {
    super();
    this.orm = _;
  }
}
