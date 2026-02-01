/**
 * Controlador de Animals (AnimalsController)
 * 
 * Este controlador maneja todas las peticiones HTTP relacionadas con los animales.
 * Define las rutas y los métodos HTTP disponibles para el recurso 'animals'.
 * 
 * Prefijo de ruta: /animals
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
  HttpStatus,           // Enum con códigos HTTP estándar
  Query                 // Decorador para obtener query parameters
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

// Define el prefijo de ruta para todos los endpoints de este controlador
@Controller('animals')
export class AnimalsController {
  
  /**
   * Constructor del controlador
   * @param animalsService - Servicio de animales inyectado
   * 
   * La inyección de dependencias permite usar el servicio
   * sin necesidad de instanciarlo manualmente.
   */
  constructor(private readonly animalsService: AnimalsService) {}

  /**
   * GET /animals
   * 
   * Obtener todos los animales
   * 
   * @returns Array con todos los animales registrados
   * 
   * Ejemplo de respuesta:
   * [
   *   { "id": 1, "name": "Lola", "species": "vaca", "age": 3, "farmId": 1 },
   *   { "id": 2, "name": "Pepito", "species": "cerdo", "age": 1, "farmId": 1 }
   * ]
   */
  @Get()
  async findAll() {
    return this.animalsService.findAll();
  }

  /**
   * GET /animals/:id
   * 
   * Obtener un animal específico por su ID
   * 
   * @param id - ID del animal (parámetro de ruta)
   * @returns El animal encontrado
   * @throws NotFoundException si el animal no existe
   * 
   * Ejemplo: GET /animals/1
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    // Convertir el ID de string a number y buscar el animal
    return this.animalsService.findOne(+id);
  }

  /**
   * POST /animals
   * 
   * Crear un nuevo animal
   * 
   * @param createAnimalDto - Datos del animal a crear (desde el body)
   * @returns El animal creado con su ID
   * @throws BadRequestException si los datos son inválidos o la granja no existe
   * 
   * Ejemplo de body:
   * {
   *   "name": "Lola",
   *   "species": "vaca",
   *   "age": 3,
   *   "farmId": 1
   * }
   */
  @Post()
  @HttpCode(HttpStatus.CREATED) // Retorna código 201 Created
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  /**
   * PUT /animals/:id
   * 
   * Actualizar un animal existente
   * 
   * @param id - ID del animal a actualizar
   * @param updateAnimalDto - Datos a actualizar (desde el body)
   * @returns El animal actualizado
   * @throws NotFoundException si el animal no existe
   * 
   * Ejemplo: PUT /animals/1
   * Body: { "name": "Lola Actualizada", "age": 4 }
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return this.animalsService.update(+id, updateAnimalDto);
  }

  /**
   * DELETE /animals/:id
   * 
   * Eliminar un animal
   * 
   * @param id - ID del animal a eliminar
   * @returns Mensaje de confirmación
   * @throws NotFoundException si el animal no existe
   * 
   * Ejemplo: DELETE /animals/1
   */
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }

  /**
   * GET /animals/:id/with-farm
   * 
   * Obtener un animal con información completa de su granja
   * 
   * @param id - ID del animal
   * @returns El animal con los datos de su granja incluidos
   * @throws NotFoundException si el animal no existe
   * 
   * Ejemplo: GET /animals/1/with-farm
   */
  @Get(':id/with-farm')
  async findOneWithFarm(@Param('id') id: string) {
    return this.animalsService.findOneWithFarm(+id);
  }

  /**
   * GET /animals/species/:species
   * 
   * Obtener animales por especie
   * 
   * @param species - Especie a buscar
   * @returns Array de animales de esa especie
   * 
   * Ejemplo: GET /animals/species/vaca
   */
  @Get('species/:species')
  async findBySpecies(@Param('species') species: string) {
    return this.animalsService.findBySpecies(species);
  }
}
