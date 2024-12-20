import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GeneSymbolService } from './gene-symbol.service';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { Role } from 'src/auth/decorator/role.decorator';
import { CreateGeneSymbolDto } from './dto/create/create-gene-symbol.dto';
import { GeneSymbol } from './gene-symbol.entity';

@Controller('gene')
@ApiTags('Gene')
export class GeneSymbolController {
  constructor(private readonly geneSymbolService: GeneSymbolService) {}

  @ApiOperation({ summary: 'Create a new gene symbol' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Role(roleTypes.CURATOR)
  @ApiBearerAuth()
  @Post('symbol')
  public createGeneSymbol(
    @Body() createGeneSymbolDto: CreateGeneSymbolDto,
    @ActiveUser() user: ActiveUserInterface,
  ): Promise<GeneSymbol> {
    return this.geneSymbolService.create(createGeneSymbolDto, user);
  }
}
