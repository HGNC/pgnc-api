import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NameService } from './name.service';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiNotFoundResponse,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';
import { Name } from './name.entity';
import { CreateNameDto } from './dto/create/create-name.dto';

@Controller('name')
@ApiTags('Name')
export class NameController {
    /**
     * Creates an instance of NameController.
     * @param {NameService} nameService The name service.
     */
    constructor(private readonly nameService: NameService) {}

    /**
     * Retrieves a name by either ID or Name.
     * @param {number | string} query The query to search for a name.
     * @returns {Promise<Name>} The promise of a name.
     */
    @Get(':query')
    @Role(roleTypes.CURATOR)
    @ApiBearerAuth()
    @ApiOperation({
        summary:
            'Retrieve a name by either ID or Name - Must be at curator level or above',
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        // links: {
        //   'Get Name': {
        //     operationRef: '/name/{query}',
        //     parameters: {
        //       query: 1,
        //     },
        //   },
        // },
    })
    @ApiNotFoundResponse({
        description: 'The name was not found.',
    })
    @ApiParam({
        name: 'query',
        description: 'The name ID or the name itself.',
        required: true,
    })
    public getName(@Param('query') query: number | string): Promise<Name> {
        return this.nameService.findName(query);
    }

    /**
     * Creates a new name.
     * @param {CreateNameDto} createNameDto The data to create a new name.
     * @throws {BadRequestException} If the name already exists.
     * @returns {Promise<Name>} The created name.
     */
    @Post()
    @Role(roleTypes.CURATOR)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Create a new name - Must be at curator level or above',
    })
    @ApiResponse({
        status: 201,
        description: 'The name record has been successfully created.',
    })
    @ApiBadRequestResponse({
        description: 'The name already exists.',
    })
    public createName(@Body() createNameDto: CreateNameDto): Promise<Name> {
        return this.nameService.create(createNameDto);
    }
}
