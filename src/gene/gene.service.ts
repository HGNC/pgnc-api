import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneProvider } from './provider/create-gene.provider';
import { Gene } from './gene.entity';
import { CreateGeneDto } from './dto/create/create-gene.dto';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/**
 * Gene service class to handle gene related operations and business logic
 */
@Injectable()
export class GeneService {
    /**
     * Constructor of GeneService class to initialize gene provider
     * @param createGeneProvider - Provider to create gene
     */
    constructor(
        @InjectRepository(Gene)
        private readonly geneRepository: Repository<Gene>,
        private readonly createGeneProvider: CreateGeneProvider,
    ) {}

    /**
     * Method to create gene
     * @param createGeneDto - Data to create gene
     * @param user - Active user
     * @returns - Created gene
     * @throws - Error if gene creation fails or user is not authorized
     */
    public async create(
        createGeneDto: CreateGeneDto,
        user: ActiveUserInterface,
    ): Promise<Gene> {
        return this.createGeneProvider.create(createGeneDto, user);
    }

    /**
     * Method to get gene by id
     * @param id - Gene id
     * @returns - Gene
     * @throws - Not found error if gene not found
     */
    public async getById(id: number): Promise<Gene> {
        try {
            const gene = await this.geneRepository.findOneOrFail({
                where: { id: id },
                withDeleted: true,
            });
            return gene;
        } catch (error) {
            if (error.name === 'EntityNotFoundError') {
                throw new NotFoundException(`Gene with id ${id} not found`);
            } else {
                console.error(error);
                throw error;
            }
        }
    }
}
