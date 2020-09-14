import { ContractDto } from './../../contract/dto/contract.dto';
export class ClientDto {
    public code?: number;
    public name: string;
    public cpf: string;
    public phone: string;
    public email: string;
    public contract: ContractDto[] | number[];
}