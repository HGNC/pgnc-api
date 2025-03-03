import { Body, Controller, Get, Post } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { LocusTypeService } from './locus-type.service';
import { Role } from 'src/auth/decorator/role.decorator';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { CreateLocusTypeDto } from './dto/create/create-locus-type.dto';
import { LocusType } from './locus-type.entity';

@Controller('locus-type')
@ApiTags('Locus Type')
export class LocusTypeController {
    constructor(private readonly locusTypeService: LocusTypeService) {}

    @Post()
    @Role(roleTypes.ADMIN)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Create a new locus type - Must be at admin level or above',
    })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @ApiBadRequestResponse({
        description: 'The record could not be created.',
    })
    async createLocusType(
        @Body() createLocusTypeDto: CreateLocusTypeDto,
    ): Promise<LocusType> {
        return this.locusTypeService.create(createLocusTypeDto);
    }

    @Get(':id')
    @Role(roleTypes.USER)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Get a locus type by id',
    })
    @ApiParam({
        name: 'id',
        description: 'The id of the locus type to retrieve',
        type: 'number',
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
    })
    @ApiBadRequestResponse({
        description: 'The record could not be retrieved.',
    })
    async getLocusGroup(id: number): Promise<LocusType> {
        return this.locusTypeService.findById(id);
    }
}
