//INTEGRANTES: JOSE TORRES / DOMINIC LASSO
import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { CourseEntity } from "./course.entity";

@Entity('students', { schema: 'education' })
export class StudentEntity {
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
    comment: 'Student Name',
  })
  name: string;

  @Column('date', {
    name: 'enrollment_date',
    nullable: true,
    comment: 'Enrollment Date',
  })
  enrollmentDate: string; 

  @Column('integer', {
    name: 'age',
    nullable: true,
    comment: 'Student Age',
  })
  age: number;

  @ManyToMany(() => CourseEntity, course => course.students)
  @JoinTable()
  courses: CourseEntity[];
}

