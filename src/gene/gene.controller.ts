import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneDto } from './dto/create/create-gene.dto';
import { Gene } from './gene.entity';
import { GeneService } from './gene.service';
import { Role } from 'src/auth/decorator/role.decorator';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { GeneDto } from './dto/retrieve/gene.dto';
import { plainToInstance } from 'class-transformer';

/**
 * Gene controller class to handle gene related routes.
 */
@Controller('gene')
@ApiTags('Gene')
export class GeneController {
    /**
     * Creates an instance of GeneController.
     */
    constructor(private readonly geneService: GeneService) {}

    /**
     * Creates a new gene. Requires the user to have the 'curator' or above role.
     */
    @Post()
    @Role(roleTypes.CURATOR)
    @ApiOperation({
        summary: 'Create a new gene - Must be a curator or an admin',
    })
    @ApiCreatedResponse({
        description: 'The gene has been successfully created.',
    })
    @ApiBearerAuth()
    public createGene(
        @Body() createGeneDto: CreateGeneDto,
        @ActiveUser() user: ActiveUserInterface,
    ): Promise<Gene> {
        return this.geneService.create(createGeneDto, user);
    }

    /**
     * Get genes by id
     */
    @Get(':id')
    @Role(roleTypes.USER)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Get a gene by its ID',
    })
    @ApiParam({
        name: 'id',
        description: 'The gene ID.',
        required: true,
    })
    @ApiOkResponse({
        description: 'The gene has been successfully retrieved.',
        type: GeneDto,
    })
    @ApiNotFoundResponse({
        description: 'Gene not found',
    })
    public async getGeneById(@Param('id') id: number): Promise<GeneDto> {
        return plainToInstance(GeneDto, this.geneService.getById(id));
    }
}
