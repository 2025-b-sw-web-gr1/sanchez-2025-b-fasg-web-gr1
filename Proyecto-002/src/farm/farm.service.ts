import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from './farm.entity';
import { CreateFarmDto, UpdateFarmDto } from './farm.dto';

/**
 * Servicio que gestiona todas las operaciones relacionadas con Granjas.
 * Proporciona métodos para CRUD completo de entidades Farm.
 */
@Injectable()
export class FarmService {
  /**
   * Constructor del servicio que inyecta el repositorio de Farm.
   * @param farmRepository Repositorio de TypeORM para la entidad Farm.
   */
  constructor(
    @InjectRepository(Farm)
    private readonly farmRepository: Repository<Farm>,
  ) {}

  /**
   * Recupera todas las granjas existentes en la base de datos.
   * @returns Promise con un arreglo de todas las granjas.
   */
  async findAll(): Promise<Farm[]> {
    return await this.farmRepository.find({
      relations: ['animals'],
    });
  }

  /**
   * Recupera una granja específica por su ID.
   * @param id ID de la granja a buscar.
   * @returns Promise con la granja encontrada.
   * @throws NotFoundException si la granja no existe.
   */
  async findOne(id: number): Promise<Farm> {
    const farm = await this.farmRepository.findOne({
      where: { id },
      relations: ['animals'],
    });

    if (!farm) {
      throw new NotFoundException(`La granja con ID ${id} no fue encontrada`);
    }

    return farm;
  }

  /**
   * Crea una nueva granja en la base de datos.
   * @param createFarmDto DTO con los datos de la nueva granja.
   * @returns Promise con la granja creada.
   */
  async create(createFarmDto: CreateFarmDto): Promise<Farm> {
    const farm = this.farmRepository.create(createFarmDto);
    return await this.farmRepository.save(farm);
  }

  /**
   * Actualiza una granja existente.
   * @param id ID de la granja a actualizar.
   * @param updateFarmDto DTO con los datos actualizados.
   * @returns Promise con la granja actualizada.
   * @throws NotFoundException si la granja no existe.
   */
  async update(id: number, updateFarmDto: UpdateFarmDto): Promise<Farm> {
    const farm = await this.findOne(id);
    Object.assign(farm, updateFarmDto);
    return await this.farmRepository.save(farm);
  }

  /**
   * Elimina una granja de la base de datos.
   * @param id ID de la granja a eliminar.
   * @throws NotFoundException si la granja no existe.
   */
  async remove(id: number): Promise<void> {
    const farm = await this.findOne(id);
    await this.farmRepository.remove(farm);
  }
}
