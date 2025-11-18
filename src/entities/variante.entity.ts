import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.entity';
import { Color } from './color.entity';
import { TalleFormato } from './talle_formato.entity';

@Entity('variante')
export class Variante {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;
  @Column()
  id_producto: number;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'id_color' })
  color: Color;
  @Column()
  id_color: number;

  @ManyToOne(() => TalleFormato, { nullable: true })
  @JoinColumn({ name: 'id_talle' })
  talle: TalleFormato;
  @Column({ nullable: true })
  id_talle: number;

  @Column('int', { default: 0 })
  stock: number;
}