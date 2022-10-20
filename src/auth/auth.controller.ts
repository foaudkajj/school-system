import {
    Body,
    Controller,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { LoginRequest } from 'src/models';

@Controller('api/auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req, @Body() loginRequest: LoginRequest) {
        return this.authService.login(req.user);
    }
}
