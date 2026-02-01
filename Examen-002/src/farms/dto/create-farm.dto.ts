/**
 * DTO para crear una nueva Granja (CreateFarmDto)
 * 
 * Este DTO define la estructura de datos necesaria para crear una nueva granja.
 * Incluye validaciones para asegurar que los datos sean correctos.
 */

import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateFarmDto {
  
  /**
   * Nombre de la granja
   * - Debe ser una cadena de texto (@IsString)
   * - No puede estar vacío (@IsNotEmpty)
   * - Debe tener al menos 2 caracteres (@MinLength)
   */
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre de la granja es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  /**
   * Ubicación de la granja
   * - Debe ser una cadena de texto (@IsString)
   * - No puede estar vacío (@IsNotEmpty)
   * - Debe tener al menos 2 caracteres (@MinLength)
   */
  @IsString({ message: 'La ubicación debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La ubicación de la granja es obligatoria' })
  @MinLength(2, { message: 'La ubicación debe tener al menos 2 caracteres' })
  location: string;
}
