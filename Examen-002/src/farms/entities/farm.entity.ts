/**
 * Entidad Farm (Granja)
 * 
 * Esta entidad representa una granja en el sistema.
 * Una granja puede tener muchos animales asociados (relación One-to-Many).
 */

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Animal } from '../../animals/entities/animal.entity';

@Entity() // Decorador que indica que esta clase es una entidad de TypeORM
export class Farm {
  
  /**
   * ID único de la granja
   * Se genera automáticamente como clave primaria autoincremental
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nombre de la granja
   * Ejemplo: "Granja El Paraíso", "Finca La Esperanza"
   */
  @Column()
  name: string;

  /**
   * Ubicación de la granja
   * Ejemplo: "Valle de Trujillo", "Costa Norte"
   */
  @Column()
  location: string;

  /**
   * Relación One-to-Many con la entidad Animal
   * 
   * Una granja puede tener muchos animales.
   * El parámetro 'animal => animal.farm' indica que la relación inversa
   * está definida en la entidad Animal a través de la propiedad 'farm'.
   * 
   * cascade: true - Permite guardar automáticamente los animales
   * cuando se guarda la granja.
   */
  @OneToMany(() => Animal, animal => animal.farm, {
    cascade: true, // Permite operaciones en cascada
    eager: false,  // No carga automáticamente los animales al consultar la granja
  })
  animals: Animal[]; // Array de animales que pertenecen a esta granja
}
