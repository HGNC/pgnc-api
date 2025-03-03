import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateExternalResourceDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the external resource',
        example: 'NCBI Gene',
    })
    name: string;
}
