/**
 * Módulo de Farms (FarmsModule)
 * 
 * Este módulo agrupa todos los componentes relacionados con las granjas:
 * - Controlador (FarmsController): Maneja las peticiones HTTP
 * - Servicio (FarmsService): Contiene la lógica de negocio
 * - Entidad (Farm): Define la estructura de datos en la base de datos
 * 
 * El módulo es independiente y puede ser importado en otros módulos.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmsService } from './farms.service';
import { FarmsController } from './farms.controller';
import { Farm } from './entities/farm.entity';

@Module({
  // Importa TypeOrmModule para proporcionar el repositorio de Farm
  imports: [TypeOrmModule.forFeature([Farm])],
  
  // Define los controladores que manejarán las rutas de este módulo
  controllers: [FarmsController],
  
  // Define los servicios que proporcionarán la lógica de negocio
  providers: [FarmsService],
  
  // Exporta el servicio para que otros módulos puedan usarlo si es necesario
  exports: [FarmsService],
})
export class FarmsModule {}
