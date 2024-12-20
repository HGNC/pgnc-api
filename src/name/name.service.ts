import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { Name } from './name.entity';
import { CreateNameDto } from './dto/create/create-name.dto';

@Injectable()
export class NameService {
  /**
   * Creates an instance of NameService.
   * @param {Repository<Name>} nameRepository The name repository.
   */
  constructor(
    @InjectRepository(Name)
    private readonly nameRepository: Repository<Name>,
  ) {}

  /**
   * Creates a new name. If the name already exists, it throws an error.
   * @param {CreateNameDto} createNameDto The data to create a new name.
   * @returns {Promise<Name>} The created name.
   */
  public async create(createNameDto: CreateNameDto): Promise<Name> {
    let name: Name;
    name = await this.nameRepository.create({ ...createNameDto });
    try {
      name = await this.nameRepository.save(name);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as any).code === '23505'
      ) {
        throw new BadRequestException('Name already exists');
      }
    }
    return name;
  }

  /**
   * Updates a name. If the name does not exist, it throws an error.
   * @returns {Promise<Name>} The updated name.
   * @param {number} nameId The ID of the name to update.
   * @param {CreateNameDto} updateNameDto The data to update the name.
   * @throws {BadRequestException} If the name ID does not exist.
   * @throws {RequestTimeoutException} If the request to the database times out.
   * @ignore This method is not yet used in the routes.
   */
  public async update(
    nameId: number,
    updateNameDto: CreateNameDto,
  ): Promise<Name> {
    let name: Name;
    try {
      name = await this.nameRepository.findOne({
        where: { id: nameId },
      });
    } catch (error) {
      throw new RequestTimeoutException({
        description:
          'The request to the database timed out. Failed to find the name.',
        cause: error,
      });
    }
    if (!name) {
      throw new BadRequestException('Name ID does not exist');
    }
    name.name = updateNameDto.name;
    try {
      await this.nameRepository.save(name);
    } catch (error) {
      throw new RequestTimeoutException({
        description: 'Failed to update the name',
        cause: error,
      });
    }
    return name;
  }

  /**
   * Deletes a name by its ID. Using this method will not cascade delete
   * and so will cause issues if the name is used.
   * @param {number} nameId The ID of the name to delete.
   * @returns {Promise<void>} An empty promise.
   */
  public async deleteById(nameId: number): Promise<void> {
    const name = await this.nameRepository.findOne({
      where: { id: nameId },
    });
    if (!name) {
      throw new NotFoundException(`Name not found for ID: ${nameId}`);
    }
    await this.nameRepository.remove(name);
  }

  /**
   * Deletes a name by its name.
   * @param {string} name The name to delete.
   * @returns {Promise<void>} An empty promise.
   * @ignore This method is not yet used in the routes.
   */
  public async deleteByName(name: string): Promise<void> {
    await this.nameRepository.delete({ name: name });
  }

  /**
   * Finds a name by its ID or name.
   * @param {number | string} query The ID or name to find.
   * @returns {Promise<Name>} The found name.
   */
  public async findName(query: number | string): Promise<Name> {
    let name: Name;
    if (typeof query === 'number') {
      name = await this.nameRepository.findOne({
        where: { id: query },
      });
    } else {
      name = await this.nameRepository.findOne({
        where: { name: query },
      });
    }
    if (!name) {
      throw new NotFoundException(`Name not found for query: ${query}`);
    }
    return name;
  }
}
