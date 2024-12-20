import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneService } from 'src/gene/gene.service';
import { UserService } from 'src/user/user.service';
import { XrefService } from 'src/xref/xref.service';
import { Repository } from 'typeorm';
import { GeneXref } from './gene-xref.entity';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneXrefDto } from './dto/create/create-gene-xref.dto';

@Injectable()
export class GeneXrefService {
  constructor(
    private readonly userService: UserService,
    private readonly geneService: GeneService,
    private readonly xrefService: XrefService,
    @InjectRepository(GeneXref)
    private readonly geneXrefRepository: Repository<GeneXref>,
  ) {}

  public async create(
    createGeneXrefDto: CreateGeneXrefDto,
    user: ActiveUserInterface,
  ): Promise<GeneXref> {
    let author = undefined;
    let gene = undefined;
    let xref = undefined;
    try {
      author = await this.userService.findById(user.sub);
      gene = await this.geneService.getById(createGeneXrefDto.gene);
      xref = await this.xrefService.findById(createGeneXrefDto.xref);
    } catch (error) {
      throw new ConflictException(error);
    }
    const geneXref = this.geneXrefRepository.create({
      source: createGeneXrefDto.source,
      status: createGeneXrefDto.status,
      creator: author,
      gene: gene,
      xref: xref,
    });
    try {
      return await this.geneXrefRepository.save(geneXref);
    } catch (error) {
      throw new ConflictException(error, {
        description: 'Gene xref creation failed. Make sure the xref is unique',
      });
    }
  }
}
