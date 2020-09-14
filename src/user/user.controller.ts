import { Controller, Get, Post, Body, NotFoundException, Param, Delete, HttpCode, Patch, UseGuards, Query } from '@nestjs/common';
import { UserService } from './service/user.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Query() query: UserDto): Promise<UserDto[]> {
        const users: UserDto[] = await this.userService.getAll(query);
        if (!users.length) {
            throw new NotFoundException('Nenhum usuário encontrado');
        }
        return users;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':code')
    async getSingle(@Param('code') code: number): Promise<UserDto> {
        const user: UserDto = await this.userService.getByCode(code);
        if (!user) {
            throw new NotFoundException(`Usuário com o código ${code} não encontrado`)
        }
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async insert(@Body() request: UserDto): Promise<number> {
        return this.userService.insert(request);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':code')
    @HttpCode(204)
    async update(@Param('code') code: number, @Body() request: UserDto): Promise<UserDto> {
        const result: UpdateResult = await this.userService.update(code, request);
        if (!result.affected) {
            throw new NotFoundException(`Usuário com o código ${code} não encontrado`);
        }
        return request;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':code')
    @HttpCode(204)
    async delete(@Param('code') code: number): Promise<DeleteResult> {
        const result: DeleteResult = await this.userService.delete(code);
        if (!result.affected) {
            throw new NotFoundException(`Nenhum usuário encontrado com o código ${code} encontrado`);
        }
        return result;
    }

}
