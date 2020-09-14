import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class ClientEntity {
    @PrimaryGeneratedColumn({name: 'code'})
    public code?: number;

    @Column({name: 'name'})
    public name: string;

    @Column({name: 'cpf'})
    public cpf: string;

    @Column({name: 'phone'})
    public phone: string;

    @Column({name: 'email'})
    public email: string;
}