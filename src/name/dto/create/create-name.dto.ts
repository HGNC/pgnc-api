import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Name data transfer object.
 */
export class CreateNameDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'An alias, previous or approved name of a gene',
        example: 'B-Raf proto-oncogene, serine/threonine kinase',
    })
    name: string;
}
