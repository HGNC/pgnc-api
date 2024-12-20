import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from './species.entity';
import { Repository } from 'typeorm';

/**
 * Service class to provide species related services.
 */
@Injectable()
export class SpeciesService {
  /**
   * Creates an instance of SpeciesService.
   * @param {Repository<Species>} speciesRepository The repository for the species entity.
   * @returns {SpeciesService} The instance of the species service
   */
  constructor(
    @InjectRepository(Species)
    private readonly speciesRepository: Repository<Species>,
  ) {}

  /**
   * Finds a species by its scientific name.
   * @param {string} sciName The scientific name of the species to find.
   * @returns {Promise<Species>} The species with the given scientific name.
   * @throws {NotFoundException} Thrown if the species with the given scientific name was not found.
   */
  public async findBySciName(sciName: string): Promise<Species> {
    const species = await this.speciesRepository.findOne({
      where: {
        scientificName: sciName,
      },
    });
    if (species) {
      return species;
    }
    throw new NotFoundException(
      `The species with scientific name ${sciName} was not found`,
    );
  }
}
