//INTEGRANTES: JOSE TORRES / DOMINIC LASSO
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { PassportEntity } from "./passport.entity";

@Entity('persons', { schema: 'identity' })
export class PersonEntity {
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

  @Column('varchar', {
    name: 'first_name',
    nullable: false,
    comment: 'First Name',
  })
  firstName: string;

  @Column('varchar', {
    name: 'last_name',
    nullable: false,
    comment: 'Last Name',
  })
  lastName: string;

  @Column('integer', {
    name: 'age',
    nullable: false,
    comment: 'person age'
  })
  age: number;

  @OneToOne(() => PassportEntity, passport => passport.person)
  @JoinColumn()
  passport: PassportEntity;
}

