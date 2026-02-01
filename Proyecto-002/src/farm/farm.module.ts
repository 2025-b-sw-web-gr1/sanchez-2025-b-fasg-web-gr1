import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmController } from './farm.controller';
import { FarmService } from './farm.service';
import { Farm } from './farm.entity';

/**
 * Módulo que agrupa todos los componentes relacionados con Granjas.
 * Configura las dependencias y controladores necesarios para la gestión de granjas.
 */
@Module({
  /**
   * Importa el módulo de TypeORM configurado para la entidad Farm.
   * Permite la inyección del repositorio de Farm en el servicio.
   */
  imports: [TypeOrmModule.forFeature([Farm])],
  /**
   * Controladores que manejan las rutas HTTP relacionadas con Granjas.
   */
  controllers: [FarmController],
  /**
   * Servicios que contienen la lógica de negocio para Granjas.
   */
  providers: [FarmService],
  /**
   * Exporta el servicio para que pueda ser utilizado por otros módulos.
   */
  exports: [FarmService],
})
export class FarmModule {}
