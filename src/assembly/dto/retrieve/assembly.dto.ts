import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsPositive,
    IsString,
    Matches,
    MaxLength,
} from 'class-validator';
import { SpeciesDto } from './assembly/species.dto';

@Exclude()
export class AssemblyDto {
    @ApiProperty({
        description: 'The assembly ID',
        example: 1,
    })
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @Expose()
    id: number;

    @ApiProperty({
        description: 'The assembly name',
        example: 'P.trichocarpa_v4.1',
        type: 'string',
    })
    @IsNotEmpty()
    @IsString()
    @Expose()
    name: string;

    @ApiProperty({
        description: 'The Genbank assembly accession',
        example: 'GCA_000002775.4',
        type: 'string',
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(128)
    @Matches(/^GCA_\d+\.\d+$/)
    @Expose()
    genbankAccession: string;

    @ApiProperty({
        description: 'The RefSeq assembly accession',
        type: 'string',
        example: 'GCF_000002775.5',
    })
    @Matches(/^GCF_\d+\.\d+$/)
    @IsNotEmpty()
    @IsString()
    @MaxLength(128)
    @Expose()
    refseqAccession: string;

    @ApiProperty({
        description: 'Is this assembly the current one?',
        type: 'boolean',
    })
    @IsNotEmpty()
    @IsBoolean()
    @Expose()
    current: boolean;

    @ApiProperty({
        description: 'Is this assembly the default one used by PGNC?',
        type: 'boolean',
    })
    @IsNotEmpty()
    @IsBoolean()
    @Expose()
    pgnc_default: boolean;

    @ApiProperty({
        description: 'The species',
    })
    species: SpeciesDto;
}
