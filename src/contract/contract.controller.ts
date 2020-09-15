import { JwtAuthGuard } from './../auth/jwt/jwt-auth.guard';
import { ContractDto } from './dto/contract.dto';
import { ContractService } from './service/contract.service';
import { Controller, Post, Body, InternalServerErrorException, Get, Param, NotFoundException, Patch, HttpStatus, HttpCode, Delete, UseGuards, Query } from '@nestjs/common';
import { Not, UpdateResult, DeleteResult } from 'typeorm';

@Controller('contract')
export class ContractController {
    constructor(
        private readonly contractService: ContractService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    public async insert(@Body() request: ContractDto): Promise<number> {
        const contract: ContractDto = await this.contractService.insert(request);
        if (contract) {
            return contract.code;
        }
        throw new InternalServerErrorException('Não foi possível cadastrar o contrato.')
    }

    @UseGuards(JwtAuthGuard)
    @Get(':code')
    public async getSingle(@Param('code') contractCode: number): Promise<ContractDto> {
        const contract: ContractDto = await this.contractService.getSingle(contractCode);
        if (!contract) {
            throw new NotFoundException('Contrato não encontrado.');
        }
        return contract;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    public async getAll(@Query() request: ContractDto): Promise<ContractDto[]> {
        const contracts: ContractDto[] = await this.contractService.getAll(request);
        if (!contracts.length) {
            throw new NotFoundException('Nenhum contrato encontrado.');
        }
        return contracts;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':code')
    @HttpCode(204)
    public async update(@Param('code') contractCode: number, @Body() request: ContractDto): Promise<void> {
        const result: UpdateResult = await this.contractService.update(contractCode, request);
        if(!result.affected) {
            throw new NotFoundException('Contrato não encontrado.');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':code')
    @HttpCode(204)
    public async delete(@Param('code') code: number): Promise<void> {
        const result: DeleteResult = await this.contractService.delete(code);
        if(!result.affected) {
            throw new NotFoundException('Contrato não encontrato.');
        }
    }
}
