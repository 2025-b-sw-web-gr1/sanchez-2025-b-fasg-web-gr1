/**
 * DTO para actualizar un Animal existente (UpdateAnimalDto)
 * 
 * Este DTO define la estructura de datos para actualizar un animal.
 * Todos los campos son opcionales porque el usuario puede querer actualizar
 * solo uno o varios campos, no necesariamente todos.
 */

import { IsString, IsNumber, IsOptional, Min, MinLength } from 'class-validator';

export class UpdateAnimalDto {
  
  /**
   * Nombre del animal (opcional)
   * - Es opcional (@IsOptional)
   * - Debe ser una cadena de texto (@IsString)
   * - Debe tener al menos 2 caracteres (@MinLength)
   */
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name?: string;

  /**
   * Especie del animal (opcional)
   * - Es opcional (@IsOptional)
   * - Debe ser una cadena de texto (@IsString)
   */
  @IsOptional()
  @IsString({ message: 'La especie debe ser una cadena de texto' })
  species?: string;

  /**
   * Edad del animal en años (opcional)
   * - Es opcional (@IsOptional)
   * - Debe ser un número (@IsNumber)
   * - Debe ser mayor o igual a 0 (@Min)
   */
  @IsOptional()
  @IsNumber({}, { message: 'La edad debe ser un número' })
  @Min(0, { message: 'La edad no puede ser negativa' })
  age?: number;

  /**
   * ID de la granja (opcional)
   * - Es opcional (@IsOptional)
   * - Debe ser un número (@IsNumber)
   * - Debe ser mayor a 0 (@Min)
   * 
   * Permite cambiar el animal de granja.
   */
  @IsOptional()
  @IsNumber({}, { message: 'El farmId debe ser un número' })
  @Min(1, { message: 'El ID de la granja debe ser mayor a 0' })
  farmId?: number;
}
