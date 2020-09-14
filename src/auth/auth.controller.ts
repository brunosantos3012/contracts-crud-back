import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { UserDto } from '../user/dto/user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

  @Post()
  @HttpCode(200)
  async login(@Body() request: LoginDto): Promise<UserDto> {
    return this.authService.login(request);
  }
}