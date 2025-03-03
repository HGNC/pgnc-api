import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsInt } from 'class-validator';
import { basicStatus } from 'src/common/enum/basic-status.enum';

export class CreateGeneNoteDto {
    @IsEnum(basicStatus)
    @IsNotEmpty()
    @ApiProperty({
        enum: basicStatus,
        description: 'The status of the gene note',
        example: 'public',
    })
    status: basicStatus;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        description: 'The gene ID',
        example: 1,
    })
    gene: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        description: 'The note ID',
        example: 1,
    })
    note: number;
}
