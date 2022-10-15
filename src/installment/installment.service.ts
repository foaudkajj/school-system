import { Injectable } from '@nestjs/common';
import { Installment } from 'src/models';
import { InstallmentRepository } from './installment.repository';

@Injectable()
export class InstallmentService {
  constructor(private installmentRepository: InstallmentRepository) { }
  getAll(): Promise<Installment[]> {
    return this.installmentRepository.orm.find();
  }

  insert(row: Installment) {
    return this.installmentRepository.orm.insert(row);
  }

  update(row: Partial<Installment>, id: string) {
    return this.installmentRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.installmentRepository.orm.delete({ id: id });
  }
}
