import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';

@Entity({name: 'usuario'})
export class UserEntity {
    @PrimaryGeneratedColumn({name:'cod_usuario'})
    code?: number;

    @Column({name:'nome'})
    name?: string;

    @Column({name: 'senha' })
    password?: string;

    @Column({name: 'email'})
    email?: string;
}