/**
 * Entidad Animal (Animal)
 * 
 * Esta entidad representa un animal en el sistema.
 * Cada animal pertenece a una granja específica (relación Many-to-One).
 */

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Farm } from '../../farms/entities/farm.entity';

@Entity() // Decorador que indica que esta clase es una entidad de TypeORM
export class Animal {
  
  /**
   * ID único del animal
   * Se genera automáticamente como clave primaria autoincremental
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nombre del animal
   * Ejemplo: "Lola", "Pepito", "Clara"
   */
  @Column()
  name: string;

  /**
   * Especie del animal
   * Ejemplos: "vaca", "cerdo", "gallina", "oveja", "caballo"
   */
  @Column()
  species: string;

  /**
   * Edad del animal en años
   * Ejemplo: 3 (significa 3 años)
   */
  @Column()
  age: number;

  /**
   * ID de la granja a la que pertenece el animal (clave foránea)
   * Este campo se maneja automáticamente por TypeORM a través de la relación
   */
  @Column({ name: 'farmId' })
  farmId: number;

  /**
   * Relación Many-to-One con la entidad Farm
   * 
   * Muchos animales pueden pertenecer a una misma granja.
   * El parámetro 'farm => farm.animals' indica que la relación inversa
   * está definida en la entidad Farm a través de la propiedad 'animals'.
   * 
   * onDelete: 'CASCADE' - Si se elimina la granja, todos sus animales
   * también serán eliminados automáticamente.
   */
  @ManyToOne(() => Farm, farm => farm.animals, {
    onDelete: 'CASCADE', // Eliminar en cascada cuando se borra la granja
    eager: false,        // No carga automáticamente la granja al consultar el animal
  })
  
  /**
   * @JoinColumn especifica que esta entidad es la propietaria de la relación
   * y define el nombre de la columna de clave foránea en la tabla 'animal'
   */
  @JoinColumn({ name: 'farmId' })
  farm: Farm; // Referencia a la granja a la que pertenece el animal
}
