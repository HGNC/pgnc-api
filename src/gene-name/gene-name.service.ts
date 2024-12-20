import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneNameDto } from './dto/create/create-gene-name.dto';
import { Gene } from 'src/gene/gene.entity';
import { User } from 'src/user/user.entity';
import { Name } from 'src/name/name.entity';
import { GeneName } from './gene-name.entity';
import { UserService } from 'src/user/user.service';
import { NameService } from 'src/name/name.service';
import { GeneService } from 'src/gene/gene.service';

@Injectable()
export class GeneNameService {
  constructor(
    private readonly userService: UserService,
    private readonly geneService: GeneService,
    private readonly nameService: NameService,
    @InjectRepository(GeneName)
    private readonly geneNameRepository: Repository<GeneName>,
  ) {}

  public async create(
    createGeneNameDto: CreateGeneNameDto,
    user: ActiveUserInterface,
  ): Promise<GeneName> {
    let author: User = undefined;
    let gene: Gene = undefined;
    let name: Name = undefined;
    try {
      author = await this.userService.findById(user.sub);
      if (createGeneNameDto.gene) {
        gene = await this.geneService.getById(createGeneNameDto.gene);
      }
      if (createGeneNameDto.name) {
        name = await this.nameService.findName(createGeneNameDto.name);
      }
    } catch (error) {
      throw new ConflictException(error);
    }
    const geneName = this.geneNameRepository.create({
      type: createGeneNameDto.type,
      status: createGeneNameDto.status,
      creator: author,
      gene: gene,
      name: name,
    });
    try {
      return await this.geneNameRepository.save(geneName);
    } catch (error) {
      throw new ConflictException(error, {
        description: 'Gene name creation failed. Make sure the name is unique',
      });
    }
  }
}
