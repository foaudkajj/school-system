import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {genSaltSync, hashSync} from 'bcryptjs';
import {GetAllSubUsersResponse, User} from 'src/models';
import {UserType} from 'src/models/enums';
import {StudentService} from 'src/student/student.service';
import {TeacherService} from 'src/teacher/teacher.service';
import {Not} from 'typeorm';
import {UserRepository} from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private teacherService: TeacherService,
    private studentService: StudentService,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.orm.find();
  }

  async insert(row: User) {
    const isExist = await this.userRepository.orm.findOneBy({rowId: row.rowId});
    if (isExist) {
      throw new HttpException(
        'ERROR.USER_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
    }

    const usernameExist = await this.userRepository.orm.findOneBy({
      username: row.username,
    });
    if (usernameExist) {
      throw new HttpException(
        'ERROR.USERNAME_ALREADY_EXIST',
        HttpStatus.BAD_REQUEST,
      );
    }

    const regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    if (!regex.test(row.username)) {
      throw new HttpException(
        'ERROR.USERNAME_NOT_VALID',
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = genSaltSync();
    const hashpassword = hashSync(row.password, salt);
    row.password = hashpassword;
    return this.userRepository.orm.insert(row);
  }

  async update(row: Partial<User>, id: string) {
    if (row.rowId) {
      const isExist = await this.userRepository.orm.findOneBy({
        rowId: row.rowId,
        id: Not(id),
      });

      if (isExist) {
        throw new HttpException(
          'ERROR.USER_ALREADY_EXIST',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if (row.username) {
      const usernameExist = await this.userRepository.orm.findOneBy({
        username: row.username,
      });

      if (usernameExist) {
        throw new HttpException(
          'ERROR.USERNAME_ALREADY_EXIST',
          HttpStatus.BAD_REQUEST,
        );
      }

      const regex =
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
      if (!regex.test(row.username)) {
        throw new HttpException(
          'ERROR.USERNAME_NOT_VALID',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if (row.password) {
      const salt = genSaltSync();
      const hashpassword = hashSync(row.password, salt);
      row.password = hashpassword;
    }

    return this.userRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.userRepository.orm.delete({id: id});
  }

  findOneByUsername(username: string) {
    return this.userRepository.orm.findOne({
      where: {username: username},
      relations: {
        role: {
          rolePermissions: {
            permission: true,
          },
        },
      },
    });
  }

  getByUserType(userType: UserType) {
    return this.userRepository.orm.find({where: {type: userType}});
  }

  async getAllSubUsers() {
    const teachers = await this.teacherService.getAll();
    const students = await this.studentService.getAll();
    //const employees = await this.employeeService.getAll();  //TODO
    const teachersResponse =
      teachers.map(teacher => {
        return <GetAllSubUsersResponse>{
          id: teacher.id,
          name: teacher.name,
          surname: teacher.surname,
          type: UserType.Teacher,
        };
      }) ?? [];

    const studentsResponse =
      students.map(student => {
        return <GetAllSubUsersResponse>{
          id: student.id,
          name: student.name,
          surname: student.surname,
          type: UserType.Student,
        };
      }) ?? [];

    /* TODO
    const employeesResponse = employees.map((employee)=>{
      return <GetAllSubUsersResponse>{
        id:employee.id,
        name:employee.name,
        surname: employee.surname,
        userType: "Employee"
      };
    });*/

    const response = [...teachersResponse, ...studentsResponse];
    return response;
  }
}
