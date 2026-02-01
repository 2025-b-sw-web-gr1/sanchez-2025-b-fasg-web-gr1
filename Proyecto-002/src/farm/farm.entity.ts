import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Animal } from '../animal/animal.entity';

/**
 * Entidad que representa una Granja en el sistema.
 * Una granja tiene una ubicación y puede contener múltiples animales.
 */
@Entity()
export class Farm {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 200 })
  location: string;

  /**
   * Relación uno a muchos con Animal.
   * Una granja puede tener muchos animales asociados.
   */
  @OneToMany(() => Animal, (animal) => animal.farm)
  animals: Animal[];
}
