import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Farm } from '../farm/farm.entity';

/**
 * Entidad que representa un Animal en el sistema.
 * Cada animal pertenece a una granja específica y tiene una especie y edad.
 */
@Entity()
export class Animal {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 100 })
  species: string;

  @Column({ type: 'integer' })
  age: number;

  /**
   * ID de la granja a la que pertenece el animal.
   * Se utiliza como clave foránea en la relación.
   */
  @Column({ name: 'farm_id', type: 'integer', nullable: true })
  farmId: number;

  /**
   * Relación muchos a uno con Farm.
   * Muchos animales pueden pertenecer a una sola granja.
   */
  @ManyToOne(() => Farm, (farm) => farm.animals, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;
}
