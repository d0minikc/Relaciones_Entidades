//INTEGRANTES: JOSE TORRES / DOMINIC LASSO
import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { StudentEntity } from "./student.entity";

@Entity('courses', { schema: 'education' })
export class CourseEntity {
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
    name: 'name_curse',
    nullable: false,
    comment: 'name of the respective course',
  })
  title: string;

  @Column('integer', {
    name: 'max_students',
    nullable: true,
    comment: 'Maximum Number of Students Allowed in the Course',
  })
  maxStudents: number; 

  @Column('varchar', {
    name: 'instructor',
    nullable: true,
    comment: 'Instructor Name',
  })
  instructor: string;

  @ManyToMany(() => StudentEntity, student => student.courses)
  students: StudentEntity[];
}

