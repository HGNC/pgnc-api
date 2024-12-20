import { Exclude, Expose, Type } from 'class-transformer';
import { ExternalResourceDto } from './xref/external-resource.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

@Exclude()
export class XrefDto {
  @ApiProperty({
    description: 'The xref ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Expose()
  id: number;

  @ApiProperty({
    description: 'The accession number or ID of the xref',
    example: 'NM_004333',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @Expose()
  displayId: string;

  @ApiProperty({
    description: 'The the external resource to which this xref belongs',
  })
  @Expose()
  @Type(() => ExternalResourceDto)
  externalResource: ExternalResourceDto;
}
