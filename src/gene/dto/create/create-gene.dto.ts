import { ApiProperty } from '@nestjs/swagger';
import { geneStatus } from '../../enum/gene-status.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

/**
 * Data transfer object for creating a gene.
 */
export class CreateGeneDto {
    /**
     * The status of the gene (e.g. INTERNAL, APPROVED, etc.).
     */
    @ApiProperty({
        enum: geneStatus,
        description: 'The status of the gene',
        example: 'internal',
    })
    @IsEnum(geneStatus)
    @IsNotEmpty()
    status: geneStatus;

    /**
     * The species scientific name.
     * e.g. 'Populus trichocarpa'.
     */
    @ApiProperty({
        description: 'The species scientific name',
        example: 'Populus trichocarpa',
    })
    @IsString()
    @IsNotEmpty()
    speciesScientificName: string;

    @ApiProperty({
        description: 'The primary gene ID',
        example: 'Potri.006G135200',
    })
    @IsString()
    @IsNotEmpty()
    primaryId: string;

    @ApiProperty({
        description: 'The primary gene ID source',
        example: 'Phytozome',
    })
    @IsString()
    @IsNotEmpty()
    primaryIdSource: string;
}
