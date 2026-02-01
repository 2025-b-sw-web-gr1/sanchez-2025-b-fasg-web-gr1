import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

/**
 * Módulo que agrupa todos los componentes relacionados con Animales.
 * Configura las dependencias y controladores necesarios para la gestión de animales.
 */
@Module({
  /**
   * Importa el módulo de TypeORM configurado para la entidad Animal.
   * Permite la inyección del repositorio de Animal en el servicio.
   */
  imports: [TypeOrmModule.forFeature([Animal])],
  /**
   * Controladores que manejan las rutas HTTP relacionadas con Animales.
   */
  controllers: [AnimalController],
  /**
   * Servicios que contienen la lógica de negocio para Animales.
   */
  providers: [AnimalService],
  /**
   * Exporta el servicio para que pueda ser utilizado por otros módulos.
   */
  exports: [AnimalService],
})
export class AnimalModule {}
