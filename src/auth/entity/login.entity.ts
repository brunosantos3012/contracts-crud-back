import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'usuario'})
export class LoginEntity {
    
    @PrimaryGeneratedColumn({name:'cod_usuario'})
    public code?: number;
    
    @Column({name:'nome'})
    public name?: string;

    @Column({name:'email'})
    public email?: string;

    @Column({name: 'senha'})
    public password?: string;
}