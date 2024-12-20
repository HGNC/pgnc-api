import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'A note about a gene',
    example: 'This gene is associated with a rare disease',
  })
  note: string;
}
