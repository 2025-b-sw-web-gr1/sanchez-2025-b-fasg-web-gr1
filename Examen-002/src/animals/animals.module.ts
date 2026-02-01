/**
 * Módulo de Animals (AnimalsModule)
 * 
 * Este módulo agrupa todos los componentes relacionados con los animales:
 * - Controlador (AnimalsController): Maneja las peticiones HTTP
 * - Servicio (AnimalsService): Contiene la lógica de negocio
 * - Entidad (Animal): Define la estructura de datos en la base de datos
 * 
 * El módulo es independiente y puede ser importado en otros módulos.
 * Importa el FarmsModule para poder verificar la existencia de granjas
 * al crear o actualizar animales.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { Animal } from './entities/animal.entity';
import { Farm } from '../farms/entities/farm.entity';

@Module({
  // Importa TypeOrmModule para proporcionar los repositorios de Animal y Farm
  // Necesitamos el repositorio de Farm para verificar que la granja exista
  imports: [TypeOrmModule.forFeature([Animal, Farm])],
  
  // Define los controladores que manejarán las rutas de este módulo
  controllers: [AnimalsController],
  
  // Define los servicios que proporcionarán la lógica de negocio
  providers: [AnimalsService],
  
  // Exporta el servicio para que otros módulos puedan usarlo si es necesario
  exports: [AnimalsService],
})
export class AnimalsModule {}
