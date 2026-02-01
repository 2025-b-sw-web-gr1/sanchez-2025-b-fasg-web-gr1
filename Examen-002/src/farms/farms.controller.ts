/**
 * Controlador de Farms (FarmsController)
 * 
 * Este controlador maneja todas las peticiones HTTP relacionadas con las granjas.
 * Define las rutas y los métodos HTTP disponibles para el recurso 'farms'.
 * 
 * Prefijo de ruta: /farms
 */

import { 
  Controller,           // Decorador para definir un controlador
  Get,                  // Decorador para peticiones GET
  Post,                 // Decorador para peticiones POST
  Put,                  // Decorador para peticiones PUT
  Delete,               // Decorador para peticiones DELETE
  Body,                 // Decorador para obtener el cuerpo de la petición
  Param,                // Decorador para obtener parámetros de la URL
  HttpCode,             // Decorador para definir el código HTTP de respuesta
  HttpStatus            // Enum con códigos HTTP estándar
} from '@nestjs/common';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';

// Define el prefijo de ruta para todos los endpoints de este controlador
@Controller('farms')
export class FarmsController {
  
  /**
   * Constructor del controlador
   * @param farmsService - Servicio de granjas inyectado
   * 
   * La inyección de dependencias permite usar el servicio
   * sin necesidad de instanciarlo manualmente.
   */
  constructor(private readonly farmsService: FarmsService) {}

  /**
   * GET /farms
   * 
   * Obtener todas las granjas
   * 
   * @returns Array con todas las granjas registradas
   * 
   * Ejemplo de respuesta:
   * [
   *   { "id": 1, "name": "Granja El Paraíso", "location": "Valle de Trujillo" },
   *   { "id": 2, "name": "Finca La Esperanza", "location": "Costa Norte" }
   * ]
   */
  @Get()
  async findAll() {
    return this.farmsService.findAll();
  }

  /**
   * GET /farms/:id
   * 
   * Obtener una granja específica por su ID
   * 
   * @param id - ID de la granja (parámetro de ruta)
   * @returns La granja encontrada
   * @throws NotFoundException si la granja no existe
   * 
   * Ejemplo: GET /farms/1
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    // Convertir el ID de string a number y buscar la granja
    return this.farmsService.findOne(+id);
  }

  /**
   * POST /farms
   * 
   * Crear una nueva granja
   * 
   * @param createFarmDto - Datos de la granja a crear (desde el body)
   * @returns La granja creada con su ID
   * @throws BadRequestException si los datos son inválidos
   * 
   * Ejemplo de body:
   * {
   *   "name": "Granja El Paraíso",
   *   "location": "Valle de Trujillo"
   * }
   */
  @Post()
  @HttpCode(HttpStatus.CREATED) // Retorna código 201 Created
  async create(@Body() createFarmDto: CreateFarmDto) {
    return this.farmsService.create(createFarmDto);
  }

  /**
   * PUT /farms/:id
   * 
   * Actualizar una granja existente
   * 
   * @param id - ID de la granja a actualizar
   * @param updateFarmDto - Datos a actualizar (desde el body)
   * @returns La granja actualizada
   * @throws NotFoundException si la granja no existe
   * 
   * Ejemplo: PUT /farms/1
   * Body: { "name": "Granja Renovada" }
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFarmDto: UpdateFarmDto,
  ) {
    return this.farmsService.update(+id, updateFarmDto);
  }

  /**
   * DELETE /farms/:id
   * 
   * Eliminar una granja
   * 
   * @param id - ID de la granja a eliminar
   * @returns Mensaje de confirmación
   * @throws NotFoundException si la granja no existe
   * 
   * Ejemplo: DELETE /farms/1
   */
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.farmsService.remove(+id);
  }

  /**
   * GET /farms/:id/animals
   * 
   * Obtener todos los animales de una granja específica
   * 
   * @param id - ID de la granja
   * @returns Array de animales de la granja
   * @throws NotFoundException si la granja no existe
   * 
   * Ejemplo: GET /farms/1/animals
   */
  @Get(':id/animals')
  async findAnimals(@Param('id') id: string) {
    return this.farmsService.findAnimalsByFarmId(+id);
  }
}
