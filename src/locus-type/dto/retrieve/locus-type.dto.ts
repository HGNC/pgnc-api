import { Exclude, Expose, Type } from 'class-transformer';
import { LocusGroupDto } from './locus-type/locus-group.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsObject, IsString, Min } from 'class-validator';

@Exclude()
export class LocusTypeDto {
  @ApiProperty({
    description: 'The locus type ID',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Expose()
  id: number;

  @ApiProperty({
    description: 'The locus type name',
    example: 'gene with protein product',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({
    description: 'The locus group to which this locus type belongs',
  })
  @IsNotEmpty()
  @IsObject()
  @Expose()
  @Type(() => LocusGroupDto)
  locusGroup: LocusGroupDto;
}
