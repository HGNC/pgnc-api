import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Exclude, Expose, Type } from 'class-transformer';
import { LocusTypeDto } from './gene_locus_type/locus-type.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsInt,
  Min,
  IsDate,
  IsEnum,
  IsObject,
} from 'class-validator';

@Exclude()
export class GeneLocusTypeDto {
  @ApiProperty({
    description: 'The gene ID associated with the gene locus type',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Expose()
  geneId: number;

  @ApiProperty({
    description: 'The locus type ID associated with the gene',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Expose()
  locusTypeId: number;

  @ApiProperty({
    description: 'The creation date of the gene locus type',
    example: '2021-07-21T00:00:00.000Z',
  })
  @IsNotEmpty()
  @IsDate()
  @Expose()
  creationDate: Date;

  @ApiProperty({
    description: 'The modification date of the gene locus type',
    example: '2021-07-21T00:00:00.000Z',
  })
  @IsNotEmpty()
  @IsDate()
  @Expose()
  modDate: Date;

  @ApiProperty({
    description: 'The withdrawal date of the gene locus type',
    example: '2021-07-21T00:00:00.000Z',
  })
  @IsDate()
  @Expose()
  withdrawnDate?: Date;

  @ApiProperty({
    description: 'The status of the gene locus type',
    example: 'public',
  })
  @IsEnum(basicStatus)
  @IsNotEmpty()
  @Expose()
  status: basicStatus;

  @ApiProperty({
    description: 'The locus type associated with the gene',
    type: LocusTypeDto,
  })
  @IsNotEmpty()
  @IsObject()
  @Expose()
  @Type(() => LocusTypeDto)
  locusType: LocusTypeDto;
}
