import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { XrefService } from './xref.service';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';
import { CreateXrefDto } from './dto/create/create-xref.dto';
import { Xref } from './xref.entity';

@Controller('xref')
@ApiTags('Cross References')
export class XrefController {
  constructor(public readonly xrefService: XrefService) {}

  @Post()
  @Role(roleTypes.CURATOR)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new cross reference - Must be at curator level or above',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record could not be created.',
  })
  async createLocusType(@Body() createXrefDto: CreateXrefDto): Promise<Xref> {
    return this.xrefService.create(createXrefDto);
  }

  @Get(':id')
  @Role(roleTypes.USER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get an Xref by id',
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the xref to retrieve',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
  })
  @ApiBadRequestResponse({
    description: 'The record could not be retrieved.',
  })
  async getXrefByInternalId(id: number): Promise<Xref> {
    return this.xrefService.findById(id);
  }
}
