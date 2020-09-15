import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../../user/dto/user.dto';
import { UserService } from '../../user/service/user.service';
import { LoginDto } from '../dto/login.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(login: LoginDto): Promise<UserDto>;
}
