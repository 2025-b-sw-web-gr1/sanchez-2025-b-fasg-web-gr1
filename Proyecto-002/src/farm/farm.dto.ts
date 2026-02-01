import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

/**
 * DTO para la creación de una nueva Granja.
 * Se utiliza para validar los datos de entrada al crear una granja.
 */
export class CreateFarmDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la granja es obligatorio' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La ubicación es obligatoria' })
  @MinLength(5, { message: 'La ubicación debe tener al menos 5 caracteres' })
  @MaxLength(200, { message: 'La ubicación no puede exceder los 200 caracteres' })
  location: string;
}

/**
 * DTO para la actualización de una Granja existente.
 * Todos los campos son opcionales para permitir actualizaciones parciales.
 */
export class UpdateFarmDto {
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name?: string;

  @IsString()
  @MinLength(5, { message: 'La ubicación debe tener al menos 5 caracteres' })
  @MaxLength(200, { message: 'La ubicación no puede exceder los 200 caracteres' })
  location?: string;
}
