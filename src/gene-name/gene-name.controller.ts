import { Body, Controller, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { GeneNameService } from './gene-name.service';
import { CreateGeneNameDto } from './dto/create/create-gene-name.dto';
import { GeneName } from './gene-name.entity';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';

@Controller('gene')
@ApiTags('Gene')
export class GeneNameController {
    constructor(private readonly geneNameService: GeneNameService) {}
    /**
     * Creates a new gene name.
     */
    @ApiOperation({ summary: 'Create a new gene name' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @Role(roleTypes.CURATOR)
    @ApiBearerAuth()
    @Post('name')
    public createGeneName(
        @Body() createGeneNameDto: CreateGeneNameDto,
        @ActiveUser() user: ActiveUserInterface,
    ): Promise<GeneName> {
        return this.geneNameService.create(createGeneNameDto, user);
    }
}
