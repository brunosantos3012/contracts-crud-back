import { ClientEntity } from './../../client/entity/client.entity';
export declare class ContractDto {
    code?: number;
    description: string;
    value: number;
    client?: ClientEntity | number;
}
