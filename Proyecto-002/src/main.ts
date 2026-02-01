import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Punto de entrada principal de la aplicación.
 * Inicializa y configura el servidor NestJS.
 */
async function bootstrap() {
  /**
   * Crea una instancia de la aplicación NestJS.
   * Se utiliza el módulo principal AppModule que configura
   * TypeORM con SQLite y los módulos de la aplicación.
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Habilita CORS para permitir solicitudes desde diferentes orígenes.
   * Esto es útil para el desarrollo y cuando se consume la API desde
   * aplicaciones frontend en dominios diferentes.
   */
  app.enableCors();

  /**
   * Inicia el servidor en el puerto 3000.
   * La API estará disponible en http://localhost:3000.
   */
  await app.listen(3000);

  /**
   * Imprime un mensaje en la consola indicando que el servidor
   * está ejecutándose y la URL de acceso.
   */
  console.log('La aplicación está ejecutándose en: http://localhost:3000');
  console.log('Documentación de la API disponible en los endpoints');
}

/**
 * Llama a la función bootstrap para iniciar la aplicación.
 */
bootstrap();
