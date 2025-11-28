import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;
  @Column()
  id_cliente: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_pedido: Date;

  @Column({ default: 'pendiente' })
  estado: string;

  @Column('decimal', { precision: 12, scale: 2 })
  total: number;

  @Column({ nullable: true })
  metodo_pago: string;

  @Column({ type: 'text', nullable: true })
  notas_cliente: string;

  @Column({ type: 'datetime' })
  fecha_entrega: Date;
}