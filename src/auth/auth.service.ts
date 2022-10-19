import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const matchPassword = bcrypt.compareSync(password, user.password);
            if (matchPassword) {
                const { password, ...result } = user;
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
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
