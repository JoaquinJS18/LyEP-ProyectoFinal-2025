import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}