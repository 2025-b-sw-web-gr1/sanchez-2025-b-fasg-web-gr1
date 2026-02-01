import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';
import { CreateAnimalDto, UpdateAnimalDto } from './animal.dto';

/**
 * Servicio que gestiona todas las operaciones relacionadas con Animales.
 * Proporciona métodos para CRUD completo de entidades Animal.
 */
@Injectable()
export class AnimalService {
  /**
   * Constructor del servicio que inyecta el repositorio de Animal.
   * @param animalRepository Repositorio de TypeORM para la entidad Animal.
   */
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  /**
   * Recupera todos los animales existentes en la base de datos.
   * @returns Promise con un arreglo de todos los animales.
   */
  async findAll(): Promise<Animal[]> {
    return await this.animalRepository.find({
      relations: ['farm'],
    });
  }

  /**
   * Recupera un animal específico por su ID.
   * @param id ID del animal a buscar.
   * @returns Promise con el animal encontrado.
   * @throws NotFoundException si el animal no existe.
   */
  async findOne(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      where: { id },
      relations: ['farm'],
    });

    if (!animal) {
      throw new NotFoundException(`El animal con ID ${id} no fue encontrado`);
    }

    return animal;
  }

  /**
   * Recupera todos los animales asociados a una granja específica.
   * @param farmId ID de la granja cuyos animales se desean recuperar.
   * @returns Promise con un arreglo de animales de la granja.
   */
  async findByFarm(farmId: number): Promise<Animal[]> {
    return await this.animalRepository.find({
      where: { farmId },
      relations: ['farm'],
    });
  }

  /**
   * Crea un nuevo animal en la base de datos.
   * @param createAnimalDto DTO con los datos del nuevo animal.
   * @returns Promise con el animal creado.
   */
  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.animalRepository.create(createAnimalDto);
    return await this.animalRepository.save(animal);
  }

  /**
   * Actualiza un animal existente.
   * @param id ID del animal a actualizar.
   * @param updateAnimalDto DTO con los datos actualizados.
   * @returns Promise con el animal actualizado.
   * @throws NotFoundException si el animal no existe.
   */
  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const animal = await this.findOne(id);
    Object.assign(animal, updateAnimalDto);
    return await this.animalRepository.save(animal);
  }

  /**
   * Elimina un animal de la base de datos.
   * @param id ID del animal a eliminar.
   * @throws NotFoundException si el animal no existe.
   */
  async remove(id: number): Promise<void> {
    const animal = await this.findOne(id);
    await this.animalRepository.remove(animal);
  }
}
