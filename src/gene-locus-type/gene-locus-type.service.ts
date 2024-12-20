import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneService } from 'src/gene/gene.service';
import { LocusTypeService } from 'src/locus-type/locus-type.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { GeneLocusType } from './gene-locus-type.entity';
import { CreateGeneLocusTypeDto } from './dto/create/create-gene-locus-type.dto';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';

@Injectable()
export class GeneLocusTypeService {
  constructor(
    private readonly userService: UserService,
    private readonly geneService: GeneService,
    private readonly locusTypeService: LocusTypeService,
    @InjectRepository(GeneLocusType)
    private readonly geneLocusTypeRepository: Repository<GeneLocusType>,
  ) {}

  public async create(
    createGeneLocusTypeDto: CreateGeneLocusTypeDto,
    user: ActiveUserInterface,
  ): Promise<GeneLocusType> {
    let author = undefined;
    let gene = undefined;
    let locusType = undefined;
    try {
      author = await this.userService.findById(user.sub);
      gene = await this.geneService.getById(createGeneLocusTypeDto.geneId);
      locusType = await this.locusTypeService.findById(
        createGeneLocusTypeDto.locusTypeId,
      );
    } catch (error) {
      throw new ConflictException(error);
    }
    const geneLocusType = this.geneLocusTypeRepository.create({
      gene,
      locusType,
      creator: author,
      status: createGeneLocusTypeDto.status,
    });
    try {
      return await this.geneLocusTypeRepository.save(geneLocusType);
    } catch (error) {
      throw new ConflictException(error, {
        description: 'Gene Locus type creation failed.',
      });
    }
  }
}
