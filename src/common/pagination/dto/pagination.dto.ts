import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

/**
 * PaginationDto is a Data Transfer Object (DTO) that defines the shape of the data that will be sent to the server.
 */
export class PaginationDto {
    /**
     * The limit of items to return.
     * @type {number}
     * @default 10
     * @optional
     * @positive
     * @transformOptions { enableImplicitConversion: true,}
     */
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number = 10;

    /**
     * The page number.
     * @type {number}
     * @default 1
     * @optional
     * @positive
     * @transformOptions { enableImplicitConversion: true,}
     */
    @IsOptional()
    @IsPositive()
    // Bleow not needed if transformOptions: { enableImplicitConversion: true,} is set in main.ts
    @Type(() => Number) // converts the value to a number
    page?: number = 1;
}
