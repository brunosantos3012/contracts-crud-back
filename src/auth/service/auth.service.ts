import { Injectable, ImATeapotException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../../user/dto/user.dto';
import { UserService } from '../../user/service/user.service';
import { LoginDto } from '../dto/login.dto';



@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }


    async login(login: LoginDto): Promise<UserDto> {
        const user: UserDto = await this.userService.login(login);
        if (!user) {
            throw new ImATeapotException('Usuário ou senha incorretos!');
        }
        delete user.password;
        const payload = { id: user.userCode };
        user.token = this.jwtService.sign(payload);
        return user;
    }

}
