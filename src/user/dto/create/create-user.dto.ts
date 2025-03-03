import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsString,
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsEmail,
    IsOptional,
    Matches,
    IsBoolean,
} from 'class-validator';

/**
 * Data transfer object for creating a user
 */
export class CreateUserDto {
    /**
     * The display name of the user
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    @ApiProperty({
        description: 'The preferred display name of the user',
        example: 'Jonny Doe',
    })
    displayName: string;

    /**
     * The first name of the user
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    @ApiProperty({
        description: 'The first name of the user',
        example: 'John',
    })
    firstName: string;

    /**
     * The last name of the user
     */
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(96)
    @ApiPropertyOptional({
        description: 'The last name of the user',
        example: 'Doe',
    })
    lastName?: string;

    /**
     * The email of the user
     */
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    @ApiProperty({
        description: 'The email of the user',
        example: 'john.doe@email.com',
    })
    email: string;

    /**
     * The password of the user
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(16)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        {
            message:
                'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
        },
    )
    @ApiProperty({
        description: 'The password of the user',
        example: 'Password1!',
    })
    password: string;

    /**
     * Is the user a current user and can still log in?
     */
    @IsBoolean()
    @IsOptional()
    @ApiPropertyOptional({
        description: 'Is the user a current user and can still log in?',
        example: true,
    })
    current: boolean;
}
