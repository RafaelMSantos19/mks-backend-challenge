import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'movies '})
export class Movies {

    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ name: 'year', type: 'int', nullable: false })
    year: number;
  
    @Column({ name: 'genero', type: 'varchar', length: 255, nullable: false })
    genero: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;
}