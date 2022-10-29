import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserService} from 'src/user/user.service';
import {JwtService} from '@nestjs/jwt';
import {StudentService} from 'src/student/student.service';
import {TeacherService} from 'src/teacher/teacher.service';
import {LoginResponse} from 'src/models';
import {compareSync} from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private studentService: StudentService,
    private techerService: TeacherService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const matchPassword = compareSync(password, user.password);
      if (matchPassword) {
        const {password, ...result} = user;
        return result;
      } else {
        throw new HttpException(
          'ERROR.WRONG_USERNAME_PASSWORD',
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = {username: user.username, sub: user.id};
    if (user.type === 'Teacher') {
      const teacher = await this.techerService.getById(user.rowId);
      return <LoginResponse>{
        username: user.username,
        userType: user.type,
        status: user.status,
        name: teacher.name,
        surname: teacher.surname,
        trName: teacher.trName,
        trSurname: teacher.surname,
        token: this.jwtService.sign(payload),
      };
    } else if (user.type === 'Student') {
      const student = await this.studentService.getById(user.rowId);
      return <LoginResponse>{
        username: user.username,
        userType: user.type,
        status: user.status,
        name: student.name,
        surname: student.surname,
        trName: student.trName,
        trSurname: student.surname,
        token: this.jwtService.sign(payload),
      };
    } else if (user.type === 'Employee') {
      //TODO
    }
  }
}
