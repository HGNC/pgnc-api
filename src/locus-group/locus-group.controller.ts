import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from 'src/auth/decorator/role.decorator';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { LocusGroup } from './locus-group.entity';
import { CreateLocusGroupDto } from './dto/create/create-locus-group.dto';
import { LocusGroupService } from './locus-group.service';

@Controller('locus-group')
@ApiTags('Locus Group')
export class LocusGroupController {
  /**
   * Creates an instance of LocusGroupController.
   * @param {LocusGroupService} locusGroupService The locus group service.
   */
  constructor(private readonly locusGroupService: LocusGroupService) {}

  @Post()
  @Role(roleTypes.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new locus group - Must be at admin level',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record could not be created.',
  })
  async createLocusGroup(
    @Body() createLocusGroupDto: CreateLocusGroupDto,
  ): Promise<LocusGroup> {
    return this.locusGroupService.create(createLocusGroupDto);
  }

  @Get(':id')
  @Role(roleTypes.USER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get a locus group by id',
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the locus group to retrieve',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
  })
  @ApiBadRequestResponse({
    description: 'The record could not be retrieved.',
  })
  async getLocusGroup(id: number): Promise<LocusGroup> {
    return this.locusGroupService.findById(id);
  }
}
