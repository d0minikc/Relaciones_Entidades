import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuthorEntity } from "./author.entity";


@Entity('books', {schema: 'ventas'})

export class BookEntity
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

 @ManyToOne(() => AuthorEntity, author => author.book)
 author:AuthorEntity;

@Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'product name'
})
title: string;

@Column('number', {
    name: 'price',
    nullable: false,
    comment: 'product price'
})
price: number;

@Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'product description'
})
description: string;



}