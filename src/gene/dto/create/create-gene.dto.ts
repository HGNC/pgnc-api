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
