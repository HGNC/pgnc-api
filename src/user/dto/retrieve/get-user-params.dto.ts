import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Data transfer object (DTO) class for getting user data with optional parameters.
 */
export class GetUserParamsDto {
  /**
   * The id of the user. It is the primary key of the user table.
   */
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    type: Number,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
