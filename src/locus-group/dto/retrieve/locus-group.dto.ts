import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class LocusGroupDto {
    @ApiProperty({
        description: 'The locus group ID',
        example: 1,
    })
    @IsInt()
    @IsNotEmpty()
    @Expose()
    id: number;

    @ApiProperty({
        description: 'The locus group name',
        example: 'protein-coding gene',
    })
    @IsNotEmpty()
    @IsString()
    @Expose()
    name: string;
}
