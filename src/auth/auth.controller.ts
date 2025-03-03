import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from 'src/auth/decorator/role.decorator';
import { roleTypes } from './enum/role-types.enum';

/**
 * The AuthController is responsible for handling authentication-related HTTP requests.
 * It uses the AuthService to perform authentication operations.
 */
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    /**
     * Creates an instance of AuthController.
     */
    constructor(private readonly authService: AuthService) {}

    /**
     * Handles the sign-in process for the API.
     *
     * @param signinDto - Data transfer object containing sign-in credentials.
     * @returns A promise that resolves to an object containing the access token.
     * @remarks
     * This method is decorated with several NestJS decorators:
     * - `@Post('sign-in')` to handle POST requests to the 'sign-in' endpoint.
     * - `@HttpCode(HttpStatus.OK)` to set the HTTP status code to 200.
     * - `@Role(roleTypes.NA)` to specify that no specific role is required.
     * - `@ApiOperation` and `@ApiResponse` for API documentation purposes.
     */
    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    @Role(roleTypes.NA)
    @ApiOperation({ summary: 'Sign in to the API' })
    @ApiResponse({
        status: 200,
        description: 'Returns the created user',
    })
    public async signin(
        @Body() signinDto: SigninDto,
    ): Promise<{ accessToken: string }> {
        return this.authService.signIn(signinDto);
    }

    /**
     * Handles the token refresh process for the API.
     *
     * @param refreshTokenDto - Data transfer object containing the refresh token.
     * @returns A promise that resolves to an object containing the new access token and refresh token.
     * @remarks
     * This method is decorated with several NestJS decorators:
     * - `@Post('refresh-tokens')` to handle POST requests to the 'refresh-tokens' endpoint.
     * - `@HttpCode(HttpStatus.OK)` to set the HTTP status code to 200.
     * - `@Role(roleTypes.NA)` to specify that no specific role is required.
     * - `@ApiOperation` and `@ApiResponse` for API documentation purposes.
     */
    @HttpCode(HttpStatus.OK)
    @Role(roleTypes.NA)
    @ApiOperation({ summary: 'Refreshes the access token' })
    @ApiResponse({
        status: 200,
        description: 'Returns the new access token and refresh token',
    })
    @Post('refresh-tokens')
    public async refreshTokens(
        @Body() refreshTokenDto: RefreshTokenDto,
    ): Promise<{ accessToken: string; refreshToken: string }> {
        return this.authService.refreshTokens(refreshTokenDto);
    }
}
