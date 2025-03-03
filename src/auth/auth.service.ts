import { Injectable } from '@nestjs/common';
import { RefreshTokensProvider } from './provider/refresh-tokens.provider';
import { SignInProvider } from './provider/sign-in.provider';
import { SigninDto } from './dto/signin.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

/**
 * The AuthService is responsible for handling authentication-related operations.
 * It uses the UserService to interact with user data.
 */
@Injectable()
export class AuthService {
    /**
     * Creates an instance of AuthService.
     */
    constructor(
        private readonly signInProvider: SignInProvider,
        private readonly refreshTokensProvider: RefreshTokensProvider,
    ) {}

    /**
     * Logs in a user with the given email & password
     */
    public async signIn(signinDto: SigninDto) {
        return await this.signInProvider.signIn(signinDto);
    }

    /**
     * Refreshes the access & refresh tokens
     */
    public async refreshTokens(
        refreshTokenDto: RefreshTokenDto,
    ): Promise<{ accessToken: string; refreshToken: string }> {
        return await this.refreshTokensProvider.refreshTokens(refreshTokenDto);
    }
}
