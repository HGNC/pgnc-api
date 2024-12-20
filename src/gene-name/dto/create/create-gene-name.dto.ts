import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { nomenclatureType } from 'src/common/enum/nomenclature-type.enum';

export class CreateGeneNameDto {
  @IsEnum(nomenclatureType)
  @IsNotEmpty()
  @ApiProperty({
    enum: nomenclatureType,
    description: 'The type of the gene name',
    example: 'alias',
  })
  type: nomenclatureType;

  @IsEnum(basicStatus)
  @IsNotEmpty()
  @ApiProperty({
    enum: basicStatus,
    description: 'The status of the gene name',
    example: 'public',
  })
  status: basicStatus;

  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({
    description: 'The gene ID',
    example: 1,
  })
  gene: number;

  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({
    description: 'The name ID',
    example: 1,
  })
  name: number;
}
