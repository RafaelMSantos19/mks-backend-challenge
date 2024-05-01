import { Entity,Column,PrimaryGeneratedColumn,UpdateDateColumn,CreateDateColumn } from 'typeorm'

@Entity({ name: 'users '})
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    name: string;
  
    @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({name: 'email' , type: 'varchar', length: 255, nullable: false })
    email: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}