import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Xref } from './xref.entity';
import { CreateXrefDto } from './dto/create/create-xref.dto';
import { ExternalResource } from 'src/external-resource/external-resource.entity';
import { ExternalResourceService } from 'src/external-resource/external-resource.service';

@Injectable()
export class XrefService {
  constructor(
    private readonly extResService: ExternalResourceService,
    @InjectRepository(Xref)
    private readonly xrefRepository: Repository<Xref>,
  ) {}

  public async create(createXrefDto: CreateXrefDto): Promise<Xref> {
    let xref: Xref;
    let extRes: ExternalResource;
    try {
      extRes = await this.extResService.findById(createXrefDto.extResourceId);
    } catch (error) {
      throw new BadRequestException({
        description: 'External Resource not found.',
        cause: error,
      });
    }
    xref = await this.xrefRepository.create({
      displayId: createXrefDto.displayId,
      externalResource: extRes,
    });
    try {
      xref = await this.xrefRepository.save(xref);
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
    return xref;
  }

  public async findById(id: number): Promise<Xref> {
    let xref = undefined;
    try {
      xref = await this.xrefRepository.findOneBy({ id });
    } catch (error) {
      throw new NotFoundException({
        description: 'Xref not found.',
        cause: error,
      });
    }
    return xref;
  }
}
