import { JwtAuthGuard } from './../auth/jwt/jwt-auth.guard';
import { ClientEntity } from './entity/client.entity';
import { ClientService } from './service/client.service';
import { ClientDto } from './dto/client.dto';
import { Body, Controller, Delete, Get, HttpCode, InternalServerErrorException, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UpdateResult, DeleteResult, Not } from 'typeorm';

@Controller('client')
export class ClientController {
    constructor(
        private readonly clientService: ClientService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    public async insertClient(@Body() request: ClientDto): Promise<number> {
        const client: ClientEntity = await this.clientService.insert(request)
        if (client) {
            return client.code;
        }
        throw new InternalServerErrorException('Não foi possível cadastrar o cliente.');
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    public async getAll(): Promise<ClientDto[]> {
        const clients: ClientDto[] = await this.clientService.getAll();
        if (!clients.length) {
            throw new NotFoundException('Nenhum cliente encontrado.');
        }
        return clients;
    }

    @Get(':code')
    public async getSingle(@Param('code') clientCode: number): Promise<ClientDto> {
        const client: ClientDto = await this.clientService.getSingle(clientCode);
        if (!client) {
            throw new NotFoundException('Cliente não encontrado.');
        }
        return client;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':code')
    @HttpCode(204)
    public async update(@Param('code') clientCode: number, @Body() request: ClientDto): Promise<void> {
        const result: UpdateResult = await this.clientService.update(clientCode, request);
        if (!result.affected) {
            throw new NotFoundException('Cliente não encontrado.');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':code')
    @HttpCode(204)
    public async delete(@Param('code') clientCode: number): Promise<void> {
        const result: DeleteResult = await this.clientService.delete(clientCode)
        if(!result.affected) {
            throw new NotFoundException('Cliente não encontrado.')
        }
    }
}
