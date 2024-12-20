import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneService } from 'src/gene/gene.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { GeneReplacement } from './gene-replacement.entity';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneReplacementDto } from './dto/create/create-gene-replacement.dto';

@Injectable()
export class GeneReplacementService {
  constructor(
    private readonly userService: UserService,
    private readonly geneService: GeneService,
    @InjectRepository(GeneReplacement)
    private readonly geneReplacementRepository: Repository<GeneReplacement>,
  ) {}

  public async create(
    createGeneReplacementDto: CreateGeneReplacementDto,
    user: ActiveUserInterface,
  ): Promise<GeneReplacement> {
    let editor = undefined;
    let previousGene = undefined;
    let replacementGene = undefined;
    try {
      editor = await this.userService.findById(user.sub);
      previousGene = await this.geneService.getById(
        createGeneReplacementDto.previousId,
      );
      replacementGene = await this.geneService.getById(
        createGeneReplacementDto.replacementId,
      );
    } catch (error) {
      throw new ConflictException(error);
    }
    const geneReplacement = this.geneReplacementRepository.create({
      previousGene: previousGene,
      replacementGene: replacementGene,
      editor: editor,
    });
    try {
      return await this.geneReplacementRepository.save(geneReplacement);
    } catch (error) {
      throw new ConflictException(error, {
        description:
          'Gene replacement creation failed. Make sure the gene replacement is unique',
      });
    }
  }
}
