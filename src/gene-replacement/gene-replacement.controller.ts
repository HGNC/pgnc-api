import { Body, Controller, Post } from '@nestjs/common';
import { GeneReplacementService } from './gene-replacement.service';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { GeneReplacement } from './gene-replacement.entity';
import { CreateGeneReplacementDto } from './dto/create/create-gene-replacement.dto';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';

@Controller('gene')
@ApiTags('Gene')
export class GeneReplacementController {
    constructor(
        private readonly geneReplacementService: GeneReplacementService,
    ) {}

    @ApiOperation({ summary: 'Create a new gene replacement' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @Role(roleTypes.CURATOR)
    @ApiBearerAuth()
    @Post('replace')
    public createGeneReplacement(
        @Body() createGeneReplacementDto: CreateGeneReplacementDto,
        @ActiveUser() user: ActiveUserInterface,
    ): Promise<GeneReplacement> {
        return this.geneReplacementService.create(
            createGeneReplacementDto,
            user,
        );
    }
}
