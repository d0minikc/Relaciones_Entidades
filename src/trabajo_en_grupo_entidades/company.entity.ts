//INTEGRANTES: JOSE TORRES / DOMINIC LASSO
import { Entity, PrimaryGeneratedColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Entity('companies', { schema: 'sales' })
export class CompanyEntity {
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
    name: 'name',
    nullable: false,
    comment: 'Company Name',
  })
  name: string;
  
  @Column('varchar', {
    name: 'location',
    nullable: true, 
    comment: 'Company Location',
  })
  location: string;

  @Column('boolean', {
    name: 'is_public',
    nullable: false,
    default: true,
    comment: 'Is the company publicly traded?',
  })
  isPublic: boolean;

  @OneToMany(() => EmployeeEntity, employee => employee.company)
  employees: EmployeeEntity[];
}


