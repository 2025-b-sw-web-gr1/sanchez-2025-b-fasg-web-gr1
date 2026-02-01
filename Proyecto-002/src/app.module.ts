import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmModule } from './farm/farm.module';
import { AnimalModule } from './animal/animal.module';
import { Farm } from './farm/farm.entity';
import { Animal } from './animal/animal.entity';

/**
 * Módulo principal de la aplicación que configura todos los componentes globales.
 * Configura la conexión a la base de datos SQLite y los módulos de la aplicación.
 */
@Module({
  /**
   * Módulos de características de la aplicación.
   */
  imports: [
    /**
     * Configuración de TypeORM con base de datos SQLite.
     * La base de datos se almacena en el archivo db.sqlite.
     * El parámetro synchronize: true permite sincronización automática del esquema.
     */
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Farm, Animal],
      synchronize: true,
    }),
    /**
     * Módulo de Granjas que contiene controladores, servicios y entidades relacionadas.
     */
    FarmModule,
    /**
     * Módulo de Animales que contiene controladores, servicios y entidades relacionadas.
     */
    AnimalModule,
  ],
  /**
   * Proveedores globales de la aplicación.
   * Configura el pipe de validación global para todas las rutas.
   */
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
