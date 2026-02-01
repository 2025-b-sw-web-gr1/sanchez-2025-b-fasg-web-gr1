import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { FarmService } from './farm.service';
import { CreateFarmDto, UpdateFarmDto } from './farm.dto';
import { Farm } from './farm.entity';

/**
 * Controlador que gestiona todas las rutas HTTP relacionadas con Granjas.
 * Expone endpoints RESTful para operaciones CRUD y consulta de animales por granja.
 */
@Controller('farms')
export class FarmController {
  /**
   * Constructor del controlador que inyecta el servicio de Granjas.
   * @param farmService Servicio que contiene la lógica de negocio para Granjas.
   */
  constructor(private readonly farmService: FarmService) {}

  /**
   * Endpoint GET /farms
   * Recupera todas las granjas existentes en la base de datos.
   * @returns Arreglo de todas las granjas.
   */
  @Get()
  async findAll(): Promise<Farm[]> {
    return await this.farmService.findAll();
  }

  /**
   * Endpoint GET /farms/:id
   * Recupera una granja específica por su ID.
   * @param id ID de la granja a buscar (parseado como número entero).
   * @returns La granja encontrada.
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Farm> {
    return await this.farmService.findOne(id);
  }

  /**
   * Endpoint GET /farms/:id/animals
   * Recupera todos los animales asociados a una granja específica.
   * @param id ID de la granja (parseado como número entero).
   * @returns Arreglo de animales de la granja.
   */
  @Get(':id/animals')
  async getAnimalsByFarm(@Param('id', ParseIntPipe) id: number): Promise<Farm> {
    return await this.farmService.findOne(id);
  }

  /**
   * Endpoint POST /farms
   * Crea una nueva granja en la base de datos.
   * @param createFarmDto DTO con los datos de la nueva granja.
   * @returns La granja creada.
   */
  @Post()
  async create(@Body() createFarmDto: CreateFarmDto): Promise<Farm> {
    return await this.farmService.create(createFarmDto);
  }

  /**
   * Endpoint PATCH /farms/:id
   * Actualiza una granja existente parcialmente.
   * @param id ID de la granja a actualizar (parseado como número entero).
   * @param updateFarmDto DTO con los datos actualizados.
   * @returns La granja actualizada.
   */
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFarmDto: UpdateFarmDto,
  ): Promise<Farm> {
    return await this.farmService.update(id, updateFarmDto);
  }

  /**
   * Endpoint DELETE /farms/:id
   * Elimina una granja de la base de datos.
   * @param id ID de la granja a eliminar (parseado como número entero).
   */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.farmService.remove(id);
  }
}
