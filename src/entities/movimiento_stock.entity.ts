import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Variante } from './variante.entity';
import { Usuario } from './usuario.entity';

@Entity('movimiento_stock')
export class MovimientoStock {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Variante)
  @JoinColumn({ name: 'id_variante' })
  variante: Variante;
  @Column()
  id_variante: number;

  @Column({ length: 30 })
  tipo: string;

  @Column('int')
  cantidad: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
  @Column()
  id_usuario: number;

  @Column({ nullable: true })
  id_pedido: number;

  @Column({ type: 'text', nullable: true })
  observacion: string;
}