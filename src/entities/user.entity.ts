import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity('roles',{schema: 'ventas'})

export class UserEntity
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

 @OneToOne(() => RoleEntity, role => role.User)
 @JoinColumn()
 Role:RoleEntity;

@Column('varchar', {
    name: 'name User',
    nullable: false,
    comment: 'Name User'
})
name: string;

@Column('varchar', {
    name: 'lastname',
    nullable: false,
    comment: 'user lastname'
})
lastname: string;

@Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'product description'
})
description: string;



}