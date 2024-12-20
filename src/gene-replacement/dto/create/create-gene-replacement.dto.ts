import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateGeneReplacementDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the gene that is being replaced',
    example: 1,
  })
  previousId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the gene that is replacing the previous gene',
    example: 2,
  })
  replacementId: number;
}
