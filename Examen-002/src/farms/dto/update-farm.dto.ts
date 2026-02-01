/**
 * DTO para actualizar una Granja existente (UpdateFarmDto)
 * 
 * Este DTO define la estructura de datos para actualizar una granja.
 * Todos los campos son opcionales porque el usuario puede querer actualizar
 * solo uno o varios campos, no necesariamente todos.
 * 
 * Extiende de PartialType(CreateFarmDto) lo que hace que todos los campos
 * del CreateFarmDto sean opcionales automáticamente.
 */

import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateFarmDto {
  
  /**
   * Nombre de la granja (opcional)
   * - Es opcional (@IsOptional)
   * - Debe ser una cadena de texto (@IsString)
   * - Debe tener al menos 2 caracteres (@MinLength)
   */
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name?: string;

  /**
   * Ubicación de la granja (opcional)
   * - Es opcional (@IsOptional)
   * - Debe ser una cadena de texto (@IsString)
   * - Debe tener al menos 2 caracteres (@MinLength)
   */
  @IsOptional()
  @IsString({ message: 'La ubicación debe ser una cadena de texto' })
  @MinLength(2, { message: 'La ubicación debe tener al menos 2 caracteres' })
  location?: string;
}
