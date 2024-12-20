import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ActiveUserInterface } from '../interface/active-user.interface';
import { User } from 'src/user/user.entity';

/**
 * GenerateTokensProvider is a provider that is responsible for generating JWT tokens.
 *
 * The provider has two methods:
 * - signToken: This method is responsible for signing a JWT token with the provided payload.
 * - generateTokens: This method is responsible for generating both access and refresh tokens.
 */
@Injectable()
export class GenerateTokensProvider {
  /**
   * GenerateTokensProvider constructor.
   * @param {JwtService} jwtService  The JWT service.
   * @param {ConfigType<typeof jwtConfig>} jwtConfiguration  The JWT configuration.
   */
  constructor(
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  /**
   * Signs a JWT token with the provided payload.
   * @param userId  The user ID.
   * @param expiresIn  The token expiration time in seconds.
   * @param payload  The payload to include in the token.
   * @returns {Promise<string>}  The signed JWT token.
   */
  public async signToken<T>(
    userId: number,
    expiresIn: number,
    payload?: T,
  ): Promise<string> {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn: expiresIn,
      },
    );
  }

  /**
   * Generates both access and refresh tokens.
   * @param user  The user entity.
   * @returns {Promise<{ accessToken: string; refreshToken: string; }>}  An object containing both access and refresh tokens.
   */
  public async generateTokens(user: User) {
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserInterface>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        {
          email: user.email,
        },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }
}
