import { Injectable } from "@nestjs/common";
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>
    ) { }

    getAll(query: UserDto): Promise<UserEntity[]> {
        return this.repository.find({where: query});
    }

    getByCode(code: number): Promise<UserEntity> {
        return this.repository.findOne(code);
    }

    async insert(user: UserEntity): Promise<number> {
        const response = await this.repository.save(user);
        return response.code
    }

    update(code: number, userData: UserEntity): Promise<UpdateResult> {
        return this.repository.update(code, userData)
    }

    delete(code: number): Promise<DeleteResult> {
        return this.repository.delete(code)
    }

    login(request: UserDto): Promise<UserDto> {
        return this.repository.findOne({where: request});
    }
}