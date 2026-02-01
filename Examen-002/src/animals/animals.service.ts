/**
 * Servicio de Animals (AnimalsService)
 * 
 * Este servicio contiene toda la lógica de negocio relacionada con los animales.
 * Se encarga de comunicarse con la base de datos a través del repositorio de TypeORM.
 */

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Farm } from '../farms/entities/farm.entity';

@Injectable() // Decorador que indica que esta clase es un servicio inyectable
export class AnimalsService {
  
  /**
   * Constructor del servicio
   * @param animalRepository - Repositorio de TypeORM para la entidad Animal
   * @param farmRepository - Repositorio de TypeORM para la entidad Farm
   * 
   * Necesitamos ambos repositorios para:
   * - animalRepository: operaciones CRUD de animales
   * - farmRepository: verificar que la granja exista al crear/actualizar un animal
   */
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
    @InjectRepository(Farm)
    private farmRepository: Repository<Farm>,
  ) {}

  /**
   * Crear un nuevo animal
   * 
   * @param createAnimalDto - Datos del animal a crear
   * @returns El animal creado con su ID asignado
   * @throws BadRequestException si la granja no existe o hay error de validación
   * 
   * Ejemplo de uso:
   * const nuevoAnimal = await animalsService.create({
   *   name: 'Lola',
   *   species: 'vaca',
   *   age: 3,
   *   farmId: 1
   * });
   */
  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    // Verificar que la granja existe antes de crear el animal
    const farm = await this.farmRepository.findOne({
      where: { id: createAnimalDto.farmId },
    });

    if (!farm) {
      throw new BadRequestException(
        `No se puede crear el animal: La granja con ID ${createAnimalDto.farmId} no existe`
      );
    }

    try {
      // Crear una nueva instancia de Animal con los datos recibidos
      const animal = this.animalRepository.create(createAnimalDto);
      
      // Guardar el animal en la base de datos
      return await this.animalRepository.save(animal);
    } catch (error) {
      // Si ocurre un error, lanzar una excepción con mensaje claro
      throw new BadRequestException('Error al crear el animal: ' + error.message);
    }
  }

  /**
   * Obtener todos los animales
   * 
   * @returns Array con todos los animales registrados
   * 
   * Nota: Este método no carga automáticamente la granja asociada
   * debido a la configuración eager: false en la relación.
   */
  async findAll(): Promise<Animal[]> {
    return await this.animalRepository.find();
  }

  /**
   * Obtener un animal por su ID
   * 
   * @param id - ID del animal a buscar
   * @returns El animal encontrado
   * @throws NotFoundException si el animal no existe
   * 
   * Ejemplo de uso:
   * const animal = await animalsService.findOne(1);
   */
  async findOne(id: number): Promise<Animal> {
    // Buscar el animal por ID
    const animal = await this.animalRepository.findOne({
      where: { id },
    });

    // Si no se encuentra, lanzar excepción 404
    if (!animal) {
      throw new NotFoundException(`Animal con ID ${id} no encontrado`);
    }

    return animal;
  }

  /**
   * Obtener un animal con información de su granja
   * 
   * @param id - ID del animal a buscar
   * @returns El animal con los datos de su granja incluidos
   * @throws NotFoundException si el animal no existe
   * 
   * Este método usa la opción relations para cargar la relación 'farm'
   */
  async findOneWithFarm(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      where: { id },
      relations: ['farm'], // Cargar la relación con la granja
    });

    if (!animal) {
      throw new NotFoundException(`Animal con ID ${id} no encontrado`);
    }

    return animal;
  }

  /**
   * Actualizar un animal existente
   * 
   * @param id - ID del animal a actualizar
   * @param updateAnimalDto - Datos a actualizar (pueden ser parciales)
   * @returns El animal actualizado
   * @throws NotFoundException si el animal no existe
   * @throws BadRequestException si la granja no existe (al cambiar de granja)
   * 
   * Ejemplo de uso:
   * await animalsService.update(1, { name: 'Nuevo Nombre', age: 4 });
   */
  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    // Verificar que el animal existe
    const animal = await this.findOne(id);

    // Si se está actualizando el farmId, verificar que la nueva granja existe
    if (updateAnimalDto.farmId) {
      const farm = await this.farmRepository.findOne({
        where: { id: updateAnimalDto.farmId },
      });

      if (!farm) {
        throw new BadRequestException(
          `No se puede actualizar: La granja con ID ${updateAnimalDto.farmId} no existe`
        );
      }
    }

    try {
      // Fusionar los datos existentes con los nuevos
      const updatedAnimal = Object.assign(animal, updateAnimalDto);
      
      // Guardar los cambios
      return await this.animalRepository.save(updatedAnimal);
    } catch (error) {
      throw new BadRequestException('Error al actualizar el animal: ' + error.message);
    }
  }

  /**
   * Eliminar un animal
   * 
   * @param id - ID del animal a eliminar
   * @returns Mensaje de confirmación
   * @throws NotFoundException si el animal no existe
   * 
   * Ejemplo de uso:
   * await animalsService.remove(1);
   */
  async remove(id: number): Promise<{ message: string }> {
    // Verificar que el animal existe
    const animal = await this.findOne(id);

    try {
      // Eliminar el animal de la base de datos
      await this.animalRepository.remove(animal);
      
      return { message: `Animal con ID ${id} eliminado correctamente` };
    } catch (error) {
      throw new BadRequestException('Error al eliminar el animal: ' + error.message);
    }
  }

  /**
   * Obtener todos los animales de una especie específica
   * 
   * @param species - Especie a buscar (ej: 'vaca', 'cerdo')
   * @returns Array de animales de esa especie
   */
  async findBySpecies(species: string): Promise<Animal[]> {
    return await this.animalRepository.find({
      where: { species },
    });
  }

  /**
   * Obtener todos los animales de una granja específica
   * 
   * @param farmId - ID de la granja
   * @returns Array de animales pertenecientes a esa granja
   */
  async findByFarmId(farmId: number): Promise<Animal[]> {
    return await this.animalRepository.find({
      where: { farmId },
    });
  }
}
