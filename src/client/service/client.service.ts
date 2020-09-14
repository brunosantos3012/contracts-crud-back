import { ClientEntity } from './../entity/client.entity';
 import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity)
        private readonly clientRepository: Repository<ClientEntity>
    ) {}

    public async insert(request: ClientEntity): Promise<ClientEntity> {
        return this.clientRepository.save(request);
    }

    public getAll(): Promise<ClientEntity[]> {
        return this.clientRepository.find();
    }

    public getSingle(clientCode: number): Promise<ClientEntity> {
        return this.clientRepository.findOne(clientCode)
    }

    public update(clientCode: number, request: ClientEntity): Promise<UpdateResult> {
        return this.clientRepository.update(clientCode, request);
    }

    public delete(clientCode: number): Promise<DeleteResult> {
        return this.clientRepository.delete(clientCode);
    }
}
