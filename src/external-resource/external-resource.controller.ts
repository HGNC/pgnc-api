import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExternalResourceService } from './external-resource.service';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';
import { CreateExternalResourceDto } from './dto/create/create-external-resource.dto';
import { ExternalResource } from './external-resource.entity';

@Controller('external-resource')
@ApiTags('External Resource')
export class ExternalResourceController {
  constructor(
    private readonly externalResourceService: ExternalResourceService,
  ) {}

  @Post()
  @Role(roleTypes.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new external resource - Must be at admin level',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record could not be created.',
  })
  async createLocusGroup(
    @Body() createExternalResourceDto: CreateExternalResourceDto,
  ): Promise<ExternalResource> {
    return this.externalResourceService.create(createExternalResourceDto);
  }

  @Get(':id')
  @Role(roleTypes.USER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get a locus group by id',
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the external resource to retrieve',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
  })
  @ApiBadRequestResponse({
    description: 'The record could not be retrieved.',
  })
  async getExternalResource(id: number): Promise<ExternalResource> {
    return this.externalResourceService.findById(id);
  }
}
