import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { basicStatus } from 'src/common/enum/basic-status.enum';

export class CreateGeneXrefDto {
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
        description: 'The XRef ID',
        example: 1,
    })
    xref: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The source of the gene xref',
        example: 'curator',
    })
    source: string;
}
