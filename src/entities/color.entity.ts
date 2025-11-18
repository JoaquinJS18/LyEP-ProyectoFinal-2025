import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('color')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  nombre: string;

  @Column({ length: 7, nullable: true })
  codigo_hex: string;
}