import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateLocusTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the locus type',
    example: 'Gene with protein product',
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty({
    description: 'The ID of the locus group to which this locus type belongs',
    example: 1,
  })
  groupId: number;
}
