import { IsEnum, IsInt, IsNotEmpty, Min } from 'class-validator';
import { basicStatus } from 'src/common/enum/basic-status.enum';

export class CreateGeneLocusTypeDto {
    @IsInt()
    @Min(1)
    @IsNotEmpty()
    geneId: number;

    @IsInt()
    @Min(1)
    @IsNotEmpty()
    locusTypeId: number;

    @IsNotEmpty()
    @IsEnum(basicStatus)
    status: basicStatus;
}
