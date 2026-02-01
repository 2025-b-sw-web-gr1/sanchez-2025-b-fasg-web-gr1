/**
 * Servicio de Farms (FarmsService)
 * 
 * Este servicio contiene toda la lógica de negocio relacionada con las granjas.
 * Se encarga de comunicarse con la base de datos a través del repositorio de TypeORM.
 */

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from './entities/farm.entity';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';

@Injectable() // Decorador que indica que esta clase es un servicio inyectable
export class FarmsService {
  
  /**
   * Constructor del servicio
   * @param farmRepository - Repositorio de TypeORM para la entidad Farm
   * 
   * El decorador @InjectRepository permite inyectar el repositorio
   * automáticamente, facilitando las operaciones CRUD con la base de datos.
   */
  constructor(
    @InjectRepository(Farm)
    private farmRepository: Repository<Farm>,
  ) {}

  /**
   * Crear una nueva granja
   * 
   * @param createFarmDto - Datos de la granja a crear
   * @returns La granja creada con su ID asignado
   * 
   * Ejemplo de uso:
   * const nuevaGranja = await farmsService.create({
   *   name: 'Granja El Paraíso',
   *   location: 'Valle de Trujillo'
   * });
   */
  async create(createFarmDto: CreateFarmDto): Promise<Farm> {
    try {
      // Crear una nueva instancia de Farm con los datos recibidos
      const farm = this.farmRepository.create(createFarmDto);
      
      // Guardar la granja en la base de datos
      return await this.farmRepository.save(farm);
    } catch (error) {
      // Si ocurre un error, lanzar una excepción con mensaje claro
      throw new BadRequestException('Error al crear la granja: ' + error.message);
    }
  }

  /**
   * Obtener todas las granjas
   * 
   * @returns Array con todas las granjas registradas
   * 
   * Nota: Este método no carga automáticamente los animales
   * debido a la configuración eager: false en la relación.
   */
  async findAll(): Promise<Farm[]> {
    return await this.farmRepository.find();
  }

  /**
   * Obtener una granja por su ID
   * 
   * @param id - ID de la granja a buscar
   * @returns La granja encontrada
   * @throws NotFoundException si la granja no existe
   * 
   * Ejemplo de uso:
   * const granja = await farmsService.findOne(1);
   */
  async findOne(id: number): Promise<Farm> {
    // Buscar la granja por ID
    const farm = await this.farmRepository.findOne({ 
      where: { id } 
    });

    // Si no se encuentra, lanzar excepción 404
    if (!farm) {
      throw new NotFoundException(`Granja con ID ${id} no encontrada`);
    }

    return farm;
  }

  /**
   * Obtener una granja con todos sus animales
   * 
   * @param id - ID de la granja a buscar
   * @returns La granja con su array de animales incluido
   * @throws NotFoundException si la granja no existe
   * 
   * Este método usa la opción relations para cargar la relación 'animals'
   */
  async findOneWithAnimals(id: number): Promise<Farm> {
    const farm = await this.farmRepository.findOne({
      where: { id },
      relations: ['animals'], // Cargar la relación con animales
    });

    if (!farm) {
      throw new NotFoundException(`Granja con ID ${id} no encontrada`);
    }

    return farm;
  }

  /**
   * Actualizar una granja existente
   * 
   * @param id - ID de la granja a actualizar
   * @param updateFarmDto - Datos a actualizar (pueden ser parciales)
   * @returns La granja actualizada
   * @throws NotFoundException si la granja no existe
   * 
   * Ejemplo de uso:
   * await farmsService.update(1, { name: 'Nuevo Nombre' });
   */
  async update(id: number, updateFarmDto: UpdateFarmDto): Promise<Farm> {
    // Verificar que la granja existe
    const farm = await this.findOne(id);

    try {
      // Fusionar los datos existentes con los nuevos
      const updatedFarm = Object.assign(farm, updateFarmDto);
      
      // Guardar los cambios
      return await this.farmRepository.save(updatedFarm);
    } catch (error) {
      throw new BadRequestException('Error al actualizar la granja: ' + error.message);
    }
  }

  /**
   * Eliminar una granja
   * 
   * @param id - ID de la granja a eliminar
   * @returns Mensaje de confirmación
   * @throws NotFoundException si la granja no existe
   * 
   * IMPORTANTE: Al eliminar una granja, todos sus animales asociados
   * también serán eliminados automáticamente debido a la configuración
   * cascade en la relación OneToMany.
   */
  async remove(id: number): Promise<{ message: string }> {
    // Verificar que la granja existe
    const farm = await this.findOne(id);

    try {
      // Eliminar la granja (y sus animales en cascada)
      await this.farmRepository.remove(farm);
      
      return { message: `Granja con ID ${id} eliminada correctamente` };
    } catch (error) {
      throw new BadRequestException('Error al eliminar la granja: ' + error.message);
    }
  }

  /**
   * Obtener todos los animales de una granja específica
   * 
   * @param id - ID de la granja
   * @returns Array de animales pertenecientes a la granja
   * @throws NotFoundException si la granja no existe
   */
  async findAnimalsByFarmId(id: number): Promise<any[]> {
    const farm = await this.farmRepository.findOne({
      where: { id },
      relations: ['animals'],
    });

    if (!farm) {
      throw new NotFoundException(`Granja con ID ${id} no encontrada`);
    }

    // Retornar solo el array de animales
    return farm.animals || [];
  }
}
