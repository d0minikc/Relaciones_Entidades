//INTEGRANTES: JOSE TORRES / DOMINIC LASSO
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { CompanyEntity } from "./company.entity";

@Entity('employees', { schema: 'sales' })
export class EmployeeEntity {
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
    comment: 'employee age'
  })
  age: number;

  @ManyToOne(() => CompanyEntity, company => company.employees)
  company: CompanyEntity;
}

