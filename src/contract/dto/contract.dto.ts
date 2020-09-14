import { ClientEntity } from './../../client/entity/client.entity';

export class ContractDto {
    public code?: number;
    public description: string;
    public value: number;
    public client?: ClientEntity | number;
}