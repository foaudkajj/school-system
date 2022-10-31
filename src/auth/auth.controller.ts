import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from 'src/auth/auth.service';
import {LocalAuthGuard} from 'src/auth/guards/local-auth.guard';
import {AllowAnonymous} from 'src/decorators/public.decorator';
import {LoginRequest} from 'src/models';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @AllowAnonymous()
  @UseGuards(LocalAuthGuard)
  login(@Request() req, @Body() loginRequest: LoginRequest) {
    return this.authService.login(req.user);
  }
}
