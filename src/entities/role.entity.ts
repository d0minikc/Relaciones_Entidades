import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('users',{schema: 'ventas'})

export class RoleEntity
{
 @PrimaryGeneratedColumn('uuid')
 id:string;
 @CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default:()=> 'CURRENT_TIMESTAMP',
 })
 createAT:Date;

 @UpdateDateColumn({
    name:'update_at',
    type:'timestamp',
    default:()=> 'CURRENT_TIMESTAMP',
 })
 updateAT:Date;

 @DeleteDateColumn({
    name:'delete_at',
    type:'timestamp',
    nullable: true,
 })
 deleteAT:Date;

 @OneToOne(() => UserEntity, user => user.Role)
 User:UserEntity;

@Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'Name User'
})
title: string;

@Column('varchar', {
    name: 'lastname',
    nullable: false,
    comment: 'rol description'
})
description: string;

}