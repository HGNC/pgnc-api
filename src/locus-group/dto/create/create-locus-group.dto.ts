import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLocusGroupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the locus group',
    example: 'Protein coding gene',
  })
  name: string;
}
