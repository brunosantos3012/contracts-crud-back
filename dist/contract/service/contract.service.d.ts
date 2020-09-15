import { ContractDto } from './../dto/contract.dto';
import { ContractEntity } from './../entity/contract.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
export declare class ContractService {
    private readonly contractRepository;
    constructor(contractRepository: Repository<ContractEntity>);
    insert(request: ContractDto): Promise<ContractEntity>;
    getSingle(contractCode: number): Promise<ContractEntity>;
    getAll(): Promise<ContractEntity[]>;
    update(contractCode: number, request: ContractDto): Promise<UpdateResult>;
    delete(contractCode: number): Promise<DeleteResult>;
}
