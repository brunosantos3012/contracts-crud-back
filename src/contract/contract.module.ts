import { ClientEntity } from './../client/entity/client.entity';
import { ContractService } from './service/contract.service';
import { ContractEntity } from './entity/contract.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContractEntity, ClientEntity])],
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {}
