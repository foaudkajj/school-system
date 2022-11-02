import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserService} from 'src/user/user.service';
import {JwtService} from '@nestjs/jwt';
import {StudentService} from 'src/student/student.service';
import {TeacherService} from 'src/teacher/teacher.service';
import {LoginResponse, User} from 'src/models';
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

  async login(user: User) {
    const permissions = user.role.rolePermissions.map(rolePermission => {
      return rolePermission.permission.name;
    });
    let payload = {
      username: user.username,
      sub: user.id,
      roles: [],
      role: undefined,
    };

    if (user.role.name !== 'admin') {
      payload = {...payload, roles: permissions};
    } else {
      payload = {...payload, role: user.role.name};
    }

    if (user.type === 'Teacher') {
      const teacher = await this.techerService.getById(user.rowId);
      return <LoginResponse>{
        username: user.username,
        userType: user.type,
        status: user.status,
        role: user.role.name,
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
        role: user.role.name,
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
