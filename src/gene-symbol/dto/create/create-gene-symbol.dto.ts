import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { nomenclatureType } from 'src/common/enum/nomenclature-type.enum';

export class CreateGeneSymbolDto {
    @IsEnum(nomenclatureType)
    @IsNotEmpty()
    @ApiProperty({
        enum: nomenclatureType,
        description: 'The type of gene symbol',
        example: 'alias',
    })
    type: nomenclatureType;

    @IsEnum(basicStatus)
    @IsNotEmpty()
    @ApiProperty({
        enum: basicStatus,
        description: 'The status of the gene symbol',
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
        description: 'The symbol ID',
        example: 1,
    })
    symbol: number;
}
