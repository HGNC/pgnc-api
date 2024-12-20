import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateXrefDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @ApiProperty({
    description: 'The accession number or ID of the xref',
    example: 'NM_004333',
  })
  displayId: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty({
    description: 'The ID of the external resource to which this xref belongs',
    example: 1,
  })
  extResourceId: number;
}
