/**
 * Punto de Entrada Principal de la Aplicación (main.ts)
 * 
 * Este archivo es el punto de inicio de la aplicación NestJS.
 * Se encarga de:
 * 1. Crear la aplicación NestJS
 * 2. Configurar el ValidationPipe para validar automáticamente los DTOs
 * 3. Configurar el prefijo global de API (opcional)
 * 4. Iniciar el servidor HTTP en el puerto especificado
 */

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crear la instancia de la aplicación NestJS
  const app = await NestFactory.create(AppModule);

  /**
   * Configuración del ValidationPipe Global
   * 
   * El ValidationPipe valida automáticamente los datos entrantes
   * según los decoradores definidos en los DTOs.
   * 
   * whitelist: true - Elimina propiedades no definidas en el DTO
   * forbidNonWhitelisted: true - Lanza error si hay propiedades no permitidas
   * transform: true - Transforma automáticamente los tipos de datos
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Solo permite propiedades definidas en los DTOs
      forbidNonWhitelisted: true,   // Lanza error si hay propiedades extras
      transform: true,              // Transforma tipos automáticamente
    }),
  );

  // Configurar el prefijo global para todas las rutas de la API
  // app.setGlobalPrefix('api'); // Descomenta esta línea si quieres que todas las rutas empiecen con /api

  // Puerto en el que se ejecutará el servidor
  const port = 3000;

  // Iniciar el servidor
  await app.listen(port);

  // Mensaje en consola indicando que el servidor está corriendo
  console.log(`\n========================================`);
  console.log(`🚀 Servidor iniciado correctamente!`);
  console.log(`📡 URL: http://localhost:${port}`);
  console.log(`📚 Documentación de endpoints disponible en el README.md`);
  console.log(`========================================\n`);
}

// Ejecutar la función bootstrap para iniciar la aplicación
bootstrap();
