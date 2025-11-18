import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Variante } from './variante.entity';

@Entity('detalle_pedido')
export class DetallePedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;
  @Column()
  id_pedido: number;

  @ManyToOne(() => Variante)
  @JoinColumn({ name: 'id_variante' })
  variante: Variante;
  @Column()
  id_variante: number;

  @Column('int')
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}