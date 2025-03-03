import { Body, Controller, Post } from '@nestjs/common';
import { GeneXrefService } from './gene-xref.service';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneXrefDto } from './dto/create/create-gene-xref.dto';
import { GeneXref } from './gene-xref.entity';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';

@Controller('gene')
@ApiTags('Gene')
export class GeneXrefController {
    constructor(private readonly geneXrefService: GeneXrefService) {}

    @ApiOperation({ summary: 'Create a new gene xref' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @Role(roleTypes.CURATOR)
    @Post('xref')
    @ApiBearerAuth()
    public createGeneXref(
        @Body() createGeneXrefDto: CreateGeneXrefDto,
        @ActiveUser() user: ActiveUserInterface,
    ): Promise<GeneXref> {
        return this.geneXrefService.create(createGeneXrefDto, user);
    }
}
