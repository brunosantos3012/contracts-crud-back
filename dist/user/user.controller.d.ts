import { UserService } from './service/user.service';
import { DeleteResult } from 'typeorm';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(query: UserDto): Promise<UserDto[]>;
    getSingle(code: number): Promise<UserDto>;
    insert(request: UserDto): Promise<number>;
    update(code: number, request: UserDto): Promise<UserDto>;
    delete(code: number): Promise<DeleteResult>;
}
