import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

/**
 * Symbol data transfer object.
 */
export class CreateSymbolDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @Matches(/^[a-zA-Z0-9-]+$/, {
        message: 'symbol name must be alphanumeric, hyphens allowed',
    })
    @ApiProperty({
        description: 'An alias, previous or approved symbolic name of a gene',
        example: 'AAPL',
    })
    symbol: string;
}
