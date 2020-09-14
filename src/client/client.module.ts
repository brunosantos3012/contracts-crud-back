import { ContractEntity } from './../contract/entity/contract.entity';
import { ClientController } from './client.controller';
import { ClientEntity } from './entity/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClientService } from './service/client.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([ClientEntity, ContractEntity])
    ],
    controllers: [
        ClientController
    ],
    providers: [
        ClientService
    ]
})
export class ClientModule {}
