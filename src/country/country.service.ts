import { Injectable } from '@nestjs/common';
import { Country } from 'src/models';
import { CountryRepository } from './country.repository';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) { }
  getAll(): Promise<Country[]> {
    return this.countryRepository.orm.find();
  }

  insert(row: Country) {
    return this.countryRepository.orm.insert(row);
  }

  update(row: Partial<Country>, id: string) {
    return this.countryRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.countryRepository.orm.delete({ id: id });
  }
}
