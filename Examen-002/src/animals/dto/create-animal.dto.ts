/**
 * DTO para crear un nuevo Animal (CreateAnimalDto)
 * 
 * Este DTO define la estructura de datos necesaria para crear un nuevo animal.
 * Incluye validaciones para asegurar que los datos sean correctos.
 */

import { IsString, IsNotEmpty, IsNumber, Min, MinLength } from 'class-validator';

export class CreateAnimalDto {
  
  /**
   * Nombre del animal
   * - Debe ser una cadena de texto (@IsString)
   * - No puede estar vacío (@IsNotEmpty)
   * - Debe tener al menos 2 caracteres (@MinLength)
   * 
   * Ejemplo: "Lola", "Pepito"
   */
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre del animal es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  /**
   * Especie del animal
   * - Debe ser una cadena de texto (@IsString)
   * - No puede estar vacío (@IsNotEmpty)
   * 
   * Ejemplo: "vaca", "cerdo", "gallina"
   */
  @IsString({ message: 'La especie debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La especie del animal es obligatoria' })
  species: string;

  /**
   * Edad del animal en años
   * - Debe ser un número (@IsNumber)
   * - No puede estar vacío (@IsNotEmpty)
   * - Debe ser mayor o igual a 0 (@Min)
   * 
   * Ejemplo: 3 (3 años)
   */
  @IsNumber({}, { message: 'La edad debe ser un número' })
  @IsNotEmpty({ message: 'La edad del animal es obligatoria' })
  @Min(0, { message: 'La edad no puede ser negativa' })
  age: number;

  /**
   * ID de la granja a la que pertenece el animal
   * - Debe ser un número (@IsNumber)
   * - No puede estar vacío (@IsNotEmpty)
   * - Debe ser mayor a 0 (@Min)
   * 
   * Este campo establece la relación con la granja.
   * Ejemplo: 1 (el animal pertenece a la granja con ID 1)
   */
  @IsNumber({}, { message: 'El farmId debe ser un número' })
  @IsNotEmpty({ message: 'El ID de la granja es obligatorio' })
  @Min(1, { message: 'El ID de la granja debe ser mayor a 0' })
  farmId: number;
}
