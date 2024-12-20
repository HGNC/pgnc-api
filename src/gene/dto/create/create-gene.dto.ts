import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { geneStatus } from '../../enum/gene-status.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
   * The model organism DB ID (or equivalent) of the gene.
   * e.g. 'POTRI.001G000100'.
   */
  @ApiPropertyOptional({
    description: 'The model organism DB ID of the gene',
    example: 'POTRI.001G000100',
  })
  @IsOptional()
  @IsString()
  mod_id: string;

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
}
