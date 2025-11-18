import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ length: 50, nullable: true })
  telefono: string;

  @Column({ type: 'text', nullable: true })
  direccion: string;
}