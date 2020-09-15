import { ClientEntity } from './../entity/client.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class ClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<ClientEntity>);
    insert(request: ClientEntity): Promise<ClientEntity>;
    getAll(query: ClientEntity): Promise<ClientEntity[]>;
    getSingle(clientCode: number): Promise<ClientEntity>;
    update(clientCode: number, request: ClientEntity): Promise<UpdateResult>;
    delete(clientCode: number): Promise<DeleteResult>;
}
