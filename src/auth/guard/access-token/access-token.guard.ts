import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService, WrongSecretProviderError } from '@nestjs/jwt';
import jwtConfig from 'src/auth/config/jwt.config';
import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/auth/constant/auth.constant';

/**
 * Guard to check if the request has a valid access token
 */
@Injectable()
export class AccessTokenGuard implements CanActivate {
  /**
   * Constructor to create an instance of the AccessTokenGuard
   * @constructor
   * @param {JwtService} jwtService - Service to handle JWT operations.
   * @param {ConfigType<typeof jwtConfig>} jwtConf - JWT configuration.
   */
  constructor(
    protected readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    protected readonly jwtConf: ConfigType<typeof jwtConfig>,
  ) {}

  /**
   * Check if the request has a valid access token
   * @param context
   * @returns true if the token is valid else false
   * @throws UnauthorizedException if the token is not found
   * @throws RequestTimeoutException if the token is invalid
   */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractRequestFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }
    const payload = this.getPayloadFromContext(context);
    request[REQUEST_USER_KEY] = payload;
    return true;
  }

  /**
   * Get the payload from the request context
   * @param context
   * @returns the payload of the token
   * @throws UnauthorizedException if the token is not found
   * @throws RequestTimeoutException if the token is invalid
   */
  protected getPayloadFromContext(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractRequestFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }
    try {
      return this.jwtService.verify(token, this.jwtConf);
    } catch (error) {
      if (error instanceof WrongSecretProviderError) {
        throw new UnauthorizedException('Invalid token');
      }
      throw new RequestTimeoutException(error.message);
    }
  }
  /**
   * Extract the token from the request header
   * @param request
   * @returns the token if found else undefined
   */
  protected extractRequestFromHeader(request: Request): string | undefined {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token;
  }
}
