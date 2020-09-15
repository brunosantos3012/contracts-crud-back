import { AuthService } from '../service/auth.service';
import { UserDto } from '../../user/dto/user.dto';
import { LoginDto } from '../dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: LoginDto): Promise<UserDto>;
}
