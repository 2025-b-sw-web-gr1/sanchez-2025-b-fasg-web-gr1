/**
 * Módulo Principal de la Aplicación (AppModule)
 * 
 * Este es el módulo raíz de la aplicación NestJS.
 * Se encarga de importar y configurar todos los módulos de la aplicación,
 * incluyendo la configuración de TypeORM para la base de datos SQLite.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importamos los módulos de Farms y Animals
import { FarmsModule } from './farms/farms.module';
import { AnimalsModule } from './animals/animals.module';

// Importamos las entidades para que TypeORM las reconozca
import { Farm } from './farms/entities/farm.entity';
import { Animal } from './animals/entities/animal.entity';

@Module({
  imports: [
    /**
     * Configuración de TypeORM con SQLite
     * 
     * type: 'sqlite' - Indica que usamos SQLite como base de datos
     * database: 'db.sqlite' - Nombre del archivo de la base de datos
     * entities: [Farm, Animal] - Entidades que TypeORM debe manejar
     * synchronize: true - Crea/actualiza automáticamente las tablas
     *                     ¡SOLO PARA DESARROLLO! En producción usar migraciones.
     */
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Farm, Animal],
      synchronize: true,
    }),

    // Importamos los módulos de la aplicación
    FarmsModule,    // Módulo de granjas
    AnimalsModule,  // Módulo de animales
  ],
})
export class AppModule {}
