import { ContractDto } from './dto/contract.dto';
import { ContractService } from './service/contract.service';
export declare class ContractController {
    private readonly contractService;
    constructor(contractService: ContractService);
    insert(request: ContractDto): Promise<number>;
    getSingle(contractCode: number): Promise<ContractDto>;
    getAll(): Promise<ContractDto[]>;
    update(contractCode: number, request: ContractDto): Promise<void>;
    delete(code: number): Promise<void>;
}
