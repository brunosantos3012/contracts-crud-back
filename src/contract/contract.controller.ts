import { ContractDto } from './dto/contract.dto';
import { ContractService } from './service/contract.service';
import { Controller, Post, Body, InternalServerErrorException, Get, Param, NotFoundException, Patch, HttpStatus, HttpCode, Delete } from '@nestjs/common';
import { Not, UpdateResult, DeleteResult } from 'typeorm';

@Controller('contract')
export class ContractController {
    constructor(
        private readonly contractService: ContractService
    ) { }

    @Post()
    public async insert(@Body() request: ContractDto): Promise<number> {
        const contract: ContractDto = await this.contractService.insert(request);
        if (contract) {
            return contract.code;
        }
        throw new InternalServerErrorException('Não foi possível cadastrar o contrato.')
    }

    @Get(':code')
    public async getSingle(@Param('code') contractCode: number): Promise<ContractDto> {
        const contract: ContractDto = await this.contractService.getSingle(contractCode);
        if (!contract) {
            throw new NotFoundException('Contrato não encontrado.');
        }
        return contract;
    }

    @Get()
    public async getAll(): Promise<ContractDto[]> {
        const contracts: ContractDto[] = await this.contractService.getAll();
        if (!contracts.length) {
            throw new NotFoundException('Nenhum contrato encontrado.');
        }
        return contracts;
    }

    @Patch(':code')
    @HttpCode(204)
    public async update(@Param('code') contractCode: number, @Body() request: ContractDto): Promise<void> {
        const result: UpdateResult = await this.contractService.update(contractCode, request);
        if(!result.affected) {
            throw new NotFoundException('Contrato não encontrado.');
        }
    }

    @Delete(':code')
    @HttpCode(204)
    public async delete(@Param('code') code: number): Promise<void> {
        const result: DeleteResult = await this.contractService.delete(code);
        if(!result.affected) {
            throw new NotFoundException('Contrato não encontrato.');
        }
    }
}
