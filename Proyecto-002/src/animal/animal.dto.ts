import { IsString, IsNotEmpty, IsNumber, Min, Max, IsOptional, IsPositive } from 'class-validator';

/**
 * DTO para la creación de un nuevo Animal.
 * Se utiliza para validar los datos de entrada al crear un animal.
 */
export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty({ message: 'La especie del animal es obligatoria' })
  @MinLength(2, { message: 'La especie debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'La especie no puede exceder los 100 caracteres' })
  species: string;

  @IsNumber({}, { message: 'La edad debe ser un número' })
  @IsPositive({ message: 'La edad debe ser un número positivo' })
  @Min(0, { message: 'La edad no puede ser menor a 0' })
  @Max(100, { message: 'La edad no puede exceder los 100 años' })
  age: number;

  @IsNumber({}, { message: 'El ID de la granja debe ser un número' })
  @IsPositive({ message: 'El ID de la granja debe ser positivo' })
  farmId: number;
}

/**
 * DTO para la actualización de un Animal existente.
 * Todos los campos son opcionales para permitir actualizaciones parciales.
 */
export class UpdateAnimalDto {
  @IsString()
  @MinLength(2, { message: 'La especie debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'La especie no puede exceder los 100 caracteres' })
  species?: string;

  @IsNumber({}, { message: 'La edad debe ser un número' })
  @IsPositive({ message: 'La edad debe ser un número positivo' })
  @Min(0, { message: 'La edad no puede ser menor a 0' })
  @Max(100, { message: 'La edad no puede exceder los 100 años' })
  age?: number;
}
