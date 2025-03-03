import { InjectRepository } from '@nestjs/typeorm';
import { LocusType } from './locus-type.entity';
import {
    BadRequestException,
    Injectable,
    NotFoundException,
    RequestTimeoutException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { LocusGroup } from 'src/locus-group/locus-group.entity';
import { LocusGroupService } from 'src/locus-group/locus-group.service';
import { CreateLocusTypeDto } from './dto/create/create-locus-type.dto';

@Injectable()
export class LocusTypeService {
    constructor(
        private readonly locusGroupService: LocusGroupService,
        @InjectRepository(LocusType)
        private readonly locusTypeRepository: Repository<LocusType>,
    ) {}

    public async create(
        createLocusTypeDto: CreateLocusTypeDto,
    ): Promise<LocusType> {
        let locusType: LocusType;
        let locusGroup: LocusGroup;
        try {
            locusGroup = await this.locusGroupService.findById(
                createLocusTypeDto.groupId,
            );
        } catch (error) {
            throw new BadRequestException({
                description: 'Locus Group not found.',
                cause: error,
            });
        }
        locusType = await this.locusTypeRepository.create({
            name: createLocusTypeDto.name,
            locusGroup: locusGroup,
        });
        try {
            locusType = await this.locusTypeRepository.save(locusType);
        } catch (error) {
            throw new RequestTimeoutException(error);
        }
        return locusType;
    }

    public async findById(id: number): Promise<LocusType> {
        let locusType = undefined;
        try {
            locusType = await this.locusTypeRepository.findOneBy({ id });
        } catch (error) {
            throw new NotFoundException({
                description: 'Locus Type not found.',
                cause: error,
            });
        }
        return locusType;
    }
}
