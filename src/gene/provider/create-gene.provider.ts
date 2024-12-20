import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Gene } from '../gene.entity';
import { CreateGeneDto } from '../dto/create/create-gene.dto';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { User } from 'src/user/user.entity';
import { SpeciesService } from 'src/species/species.service';
import { Species } from 'src/species/species.entity';

/**
 * A provider for creating a new gene in the database.
 */
@Injectable()
export class CreateGeneProvider {
  /**
   * Constructor of CreateGeneProvider.
   * @param userService - The user service.
   * @param speciesService - The species service.
   * @param geneRepository - The gene repository.
   */
  constructor(
    private readonly userService: UserService,
    private readonly speciesService: SpeciesService,
    @InjectRepository(Gene)
    private readonly geneRepository: Repository<Gene>,
  ) {}

  /**
   * Creates a new gene in the database.
   * @param createGeneDto - The data to create a new gene.
   * @param user - The user who creates the gene.
   * @returns The created gene.
   */
  public async create(
    createGeneDto: CreateGeneDto,
    user: ActiveUserInterface,
  ): Promise<Gene> {
    let author: User = undefined;
    let species: Species = undefined;
    try {
      author = await this.userService.findById(user.sub);
      species = await this.speciesService.findBySciName(
        createGeneDto.speciesScientificName,
      );
    } catch (error) {
      throw new ConflictException(error);
    }
    const gene = this.geneRepository.create({
      ...createGeneDto,
      creator: author,
      species: species,
    });
    try {
      return await this.geneRepository.save(gene);
    } catch (error) {
      throw new ConflictException(error, {
        description: 'Gene creation failed.',
      });
    }
  }
}
