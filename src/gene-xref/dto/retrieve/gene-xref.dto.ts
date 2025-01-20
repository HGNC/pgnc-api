import { Exclude, Expose, Type } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { XrefDto } from './gene-xref/xref.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsString,
  Min,
} from 'class-validator';

@Exclude()
export class GeneXrefDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    description: 'The gene ID associated with the gene xref',
    example: 1,
  })
  @Expose()
  geneId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @ApiProperty({
    description: 'The XRef ID',
    example: 1,
  })
  @Expose()
  xrefId: number;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    description: 'The creation date of the gene xref',
    example: '2021-07-21T00:00:00.000Z',
  })
  @Expose()
  creationDate: Date;

  @IsDate()
  @ApiPropertyOptional({
    description: 'The withdrawal date of the gene xref',
    example: '2021-07-21T00:00:00.000Z',
  })
  @Expose()
  withdrawnDate?: Date;

  @IsEnum(basicStatus)
  @IsNotEmpty()
  @ApiProperty({
    enum: basicStatus,
    description: 'The status of the gene symbol',
    example: 'public',
  })
  @Expose()
  status: basicStatus;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The source of the gene xref',
    example: 'curator',
  })
  @Expose()
  source: string;

  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    description: 'The xref object',
    type: XrefDto,
  })
  @Expose()
  @Type(() => XrefDto)
  xref: XrefDto;
}
