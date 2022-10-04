import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Student} from './models';
import {StudentRepository} from './student/student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [],
  providers: [StudentRepository],
  exports: [StudentRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
