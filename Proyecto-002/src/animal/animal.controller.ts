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
import { AnimalService } from './animal.service';
import { CreateAnimalDto, UpdateAnimalDto } from './animal.dto';
import { Animal } from './animal.entity';

/**
 * Controlador que gestiona todas las rutas HTTP relacionadas con Animales.
 * Expone endpoints RESTful para operaciones CRUD y consulta de animales por granja.
 */
@Controller('animals')
export class AnimalController {
  /**
   * Constructor del controlador que inyecta el servicio de Animales.
   * @param animalService Servicio que contiene la lógica de negocio para Animales.
   */
  constructor(private readonly animalService: AnimalService) {}

  /**
   * Endpoint GET /animals
   * Recupera todos los animales existentes en la base de datos.
   * @returns Arreglo de todos los animales.
   */
  @Get()
  async findAll(): Promise<Animal[]> {
    return await this.animalService.findAll();
  }

  /**
   * Endpoint GET /animals/:id
   * Recupera un animal específico por su ID.
   * @param id ID del animal a buscar (parseado como número entero).
   * @returns El animal encontrado.
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Animal> {
    return await this.animalService.findOne(id);
  }

  /**
   * Endpoint GET /animals/farm/:farmId
   * Recupera todos los animales asociados a una granja específica.
   * @param farmId ID de la granja (parseado como número entero).
   * @returns Arreglo de animales de la granja.
   */
  @Get('farm/:farmId')
  async findByFarm(
    @Param('farmId', ParseIntPipe) farmId: number,
  ): Promise<Animal[]> {
    return await this.animalService.findByFarm(farmId);
  }

  /**
   * Endpoint POST /animals
   * Crea un nuevo animal en la base de datos.
   * @param createAnimalDto DTO con los datos del nuevo animal.
   * @returns El animal creado.
   */
  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
    return await this.animalService.create(createAnimalDto);
  }

  /**
   * Endpoint PATCH /animals/:id
   * Actualiza un animal existente parcialmente.
   * @param id ID del animal a actualizar (parseado como número entero).
   * @param updateAnimalDto DTO con los datos actualizados.
   * @returns El animal actualizado.
   */
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ): Promise<Animal> {
    return await this.animalService.update(id, updateAnimalDto);
  }

  /**
   * Endpoint DELETE /animals/:id
   * Elimina un animal de la base de datos.
   * @param id ID del animal a eliminar (parseado como número entero).
   */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.animalService.remove(id);
  }
}
