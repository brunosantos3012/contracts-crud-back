import { ContractDto } from './../../contract/dto/contract.dto';
export declare class ClientDto {
    code?: number;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    contract: ContractDto[] | number[];
}
