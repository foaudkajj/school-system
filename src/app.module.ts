import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallmentController } from './installment/installment.controller';
import { InstallmentService } from './installment/installment.service';
import { SharedModule } from './shared.module';
import { StudentEvaluationController } from './student-evaluation/student-evaluation.controller';
import { StudentEvaluationService } from './student-evaluation/student-evaluation.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      logging: false,
      extra: {
        decimalNumbers: true,
      },
      autoLoadEntities: true,
      keepConnectionAlive: true,
      migrationsRun: true,
      migrations: ['migration/*.js'],
    }),
    SharedModule,
  ],
  controllers: [AppController, StudentController, StudentEvaluationController, InstallmentController],
  providers: [AppService, StudentService, StudentEvaluationService, InstallmentService],
})
export class AppModule { }
