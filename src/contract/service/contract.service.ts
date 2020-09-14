import { ContractDto } from './../dto/contract.dto';
import { ContractEntity } from './../entity/contract.entity';
import { ClientEntity } from './../../client/entity/client.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ContractService {
    constructor(
        @InjectRepository(ContractEntity)
        private readonly contractRepository: Repository<ContractEntity>
    ){}

    public insert(request: ContractDto): Promise<ContractEntity> {
        return this.contractRepository.save(request);
    }

    public getSingle(contractCode: number): Promise<ContractEntity> {
        return this.contractRepository.findOne(contractCode, {relations: ['client']});
    }

    public getAll(): Promise<ContractEntity[]> {
        return this.contractRepository.find();
    }

    public update(contractCode: number, request: ContractDto): Promise<UpdateResult> {
        return this.contractRepository.update(contractCode, request);
    }

    public delete(contractCode: number): Promise<DeleteResult> {
        return this.contractRepository.delete(contractCode);
    }

}
