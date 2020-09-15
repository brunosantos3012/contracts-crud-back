import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserDto } from '../dto/user.dto';
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<UserEntity>);
    getAll(query: UserDto): Promise<UserEntity[]>;
    getByCode(code: number): Promise<UserEntity>;
    insert(user: UserEntity): Promise<number>;
    update(code: number, userData: UserEntity): Promise<UpdateResult>;
    delete(code: number): Promise<DeleteResult>;
    login(request: UserDto): Promise<UserDto>;
}
