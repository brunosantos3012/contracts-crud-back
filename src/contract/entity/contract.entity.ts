import { ClientEntity } from './../../client/entity/client.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('contract')
export class ContractEntity {
    @PrimaryGeneratedColumn({name: 'code'})
    public code?: number;

    @Column({name: 'description'})
    public description: string;

    @Column({name: 'value'})
    public value: number;

    @ManyToOne(type => ClientEntity, client => client.code)
    @JoinColumn({name:'client'})
    public client?: ClientEntity | number;
}