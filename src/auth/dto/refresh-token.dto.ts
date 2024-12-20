import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * The data transfer object for refreshing an access token.
 */
export class RefreshTokenDto {
  /**
   * The refresh token.
   * - Must not be empty.
   * - Must be a JWT string.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The refresh token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  refreshToken: string;
}
