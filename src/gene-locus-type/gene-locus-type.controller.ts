import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GeneLocusTypeService } from './gene-locus-type.service';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { Role } from 'src/auth/decorator/role.decorator';
import { CreateGeneLocusTypeDto } from './dto/create/create-gene-locus-type.dto';
import { GeneLocusType } from './gene-locus-type.entity';

@Controller('gene')
@ApiTags('Gene')
export class GeneLocusTypeController {
  constructor(private readonly geneLocusTypeService: GeneLocusTypeService) {}

  @ApiOperation({ summary: 'Create a new gene locus type relationship' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Role(roleTypes.CURATOR)
  @ApiBearerAuth()
  @Post('locus-type')
  public createGeneLocusType(
    @Body() createGeneLocusTypeDto: CreateGeneLocusTypeDto,
    @ActiveUser() user: ActiveUserInterface,
  ): Promise<GeneLocusType> {
    return this.geneLocusTypeService.create(createGeneLocusTypeDto, user);
  }
}
