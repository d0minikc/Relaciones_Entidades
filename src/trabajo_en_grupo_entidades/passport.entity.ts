//INTEGRANTES: JOSE TORRES / DOMINIC LASSO
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PersonEntity } from "./person.entity";

@Entity('passports', { schema: 'identity' })
export class PassportEntity {
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
    name: 'number',
    nullable: false,
    comment: 'Passport Number',
  })
  number: string;

  @Column('varchar', {
    name: 'issue_date',
    nullable: true,
    comment: 'Date of Issue',
  })
  issueDate: string; 

  @Column('varchar', {
    name: 'expiration_date',
    nullable: true,
    comment: 'Expiration Date',
  })
  expirationDate: string;

  @OneToOne(() => PersonEntity, person => person.passport)
  person: PersonEntity;
}

