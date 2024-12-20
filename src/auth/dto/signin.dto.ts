import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

/**
 * Data transfer object for signing in a user
 */
export class SigninDto {
  /**
   * The email of the user
   * - Must be a valid email
   * - Must not be empty
   */
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@email.com',
  })
  email: string;

  /**
   * The password of the user
   * - Must be a string
   * - Must not be empty
   */
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The password of the user',
    example: 'Password1!',
  })
  password: string;
}
