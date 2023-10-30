import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "./book.entity";

@Entity('authors', {schema: 'ventas'})

export class AuthorEntity
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

@OneToMany(() => BookEntity, book => book.author)
book: BookEntity[];

@Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'name author'
})
name: string;

@Column('number', {
    name: 'date',
    nullable: false,
    comment: 'birthay date'
})
date: number;

@Column('varchar', {
    name: 'age',
    nullable: true,
    comment: 'age author'
})
age: string;

}