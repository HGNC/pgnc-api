import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { GenerateTokensProvider } from './generate-tokens.provider';
import { UserService } from 'src/user/user.service';
import { ActiveUserInterface } from '../interface/active-user.interface';

/**
 * RefreshTokensProvider is a provider that is responsible for refreshing JWT tokens.
 */
@Injectable()
export class RefreshTokensProvider {
  /**
   * RefreshTokensProvider constructor.
   * @param {JwtService} jwtService  The JWT service.
   * @param {ConfigType<typeof jwtConfig>} jwtConf  The JWT configuration.
   * @param {GenerateTokensProvider} generateTokensProvider  The GenerateTokensProvider service.
   * @param {UserService} userService  The User service.
   */
  constructor(
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConf: ConfigType<typeof jwtConfig>,
    private readonly generateTokensProvider: GenerateTokensProvider,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * Refreshes the JWT tokens.
   * @async
   * @param {RefreshTokenDto} refreshTokenDto  The refresh token DTO.
   * @returns {Promise<{ accessToken: string; refreshToken: string; }>}  An object containing both access and refresh tokens.
   * @throws {UnauthorizedException}  Throws an UnauthorizedException if the refresh token is invalid.
   */
  public async refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    try {
      const { sub } = await this.jwtService.verifyAsync<
        Pick<ActiveUserInterface, 'sub'>
      >(refreshTokenDto.refreshToken, {
        secret: this.jwtConf.secret,
        audience: this.jwtConf.audience,
        issuer: this.jwtConf.issuer,
      });
      const user = await this.userService.findById(sub);
      return await this.generateTokensProvider.generateTokens(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
