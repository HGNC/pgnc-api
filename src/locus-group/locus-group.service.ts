import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { LocusGroup } from './locus-group.entity';
import { CreateLocusGroupDto } from './dto/create/create-locus-group.dto';

@Injectable()
export class LocusGroupService {
  constructor(
    @InjectRepository(LocusGroup)
    private readonly locusGroupRepository: Repository<LocusGroup>,
  ) {}

  public async create(
    createLocusGroupDto: CreateLocusGroupDto,
  ): Promise<LocusGroup> {
    let locusGroup: LocusGroup;
    locusGroup = await this.locusGroupRepository.create({
      ...createLocusGroupDto,
    });
    try {
      locusGroup = await this.locusGroupRepository.save(locusGroup);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as any).code === '23505'
      ) {
        throw new BadRequestException('Locus group already exists');
      }
    }
    return locusGroup;
  }

  public async findById(id: number): Promise<LocusGroup> {
    let locusGroup = undefined;
    try {
      locusGroup = await this.locusGroupRepository.findOneBy({ id });
    } catch (error) {
      throw new BadRequestException({
        description: 'Locus Group not found.',
        cause: error,
      });
    }
    if (!locusGroup) {
      throw new BadRequestException({
        description: `Locus group not found: ${id}.`,
      });
    }
    return locusGroup;
  }
}
