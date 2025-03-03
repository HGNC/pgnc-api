import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExternalResource } from './external-resource.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateExternalResourceDto } from './dto/create/create-external-resource.dto';

@Injectable()
export class ExternalResourceService {
    constructor(
        @InjectRepository(ExternalResource)
        private readonly externalResourceRepository: Repository<ExternalResource>,
    ) {}

    public async create(
        createExternalResourceDto: CreateExternalResourceDto,
    ): Promise<ExternalResource> {
        let externalResource: ExternalResource;
        externalResource = await this.externalResourceRepository.create({
            ...createExternalResourceDto,
        });
        try {
            externalResource =
                await this.externalResourceRepository.save(externalResource);
        } catch (error) {
            if (
                error instanceof QueryFailedError &&
                (error as any).code === '23505'
            ) {
                throw new BadRequestException(
                    'External resource already exists',
                );
            }
        }
        return externalResource;
    }

    public async findById(id: number): Promise<ExternalResource> {
        let externalResource = undefined;
        try {
            externalResource = await this.externalResourceRepository.findOneBy({
                id,
            });
        } catch (error) {
            throw new BadRequestException({
                description: 'External resource not found.',
                cause: error,
            });
        }
        if (!externalResource) {
            throw new BadRequestException({
                description: `Resource not found: ${id}.`,
            });
        }
        return externalResource;
    }
}
