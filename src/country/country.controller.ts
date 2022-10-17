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
import { Country } from 'src/models';
import { CountryService } from './country.service';

@Controller('api/countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @Get('get')
  getAll(): Promise<Country[]> {
    return this.countryService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Country) {
    return this.countryService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Country, @Param('id') id: string) {
    return this.countryService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.countryService.delete(id);
  }
}
