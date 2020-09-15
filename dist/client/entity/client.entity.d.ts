import { ContractEntity } from './../../contract/entity/contract.entity';
export declare class ClientEntity {
    code?: number;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    contract: ContractEntity[] | number[];
}
