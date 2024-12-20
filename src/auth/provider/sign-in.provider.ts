import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SigninDto } from '../dto/signin.dto';
import { HashingProvider } from './hashing.provider';
import { GenerateTokensProvider } from './generate-tokens.provider';

/**
 * SignInProvider is a provider that is responsible for signing in a user.
 */
@Injectable()
export class SignInProvider {
  /**
   * SignInProvider constructor.
   * @param {UserService} userService  The User service.
   * @param {HashingProvider} hashingProvider  The HashingProvider service.
   * @param {GenerateTokensProvider} generateTokensProvider  The GenerateTokensProvider service.
   */
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly hashingProvider: HashingProvider,
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  /**
   * Signs in a user.
   * @param {SigninDto} signinDto  The sign-in DTO.
   * @returns {Promise<{ accessToken: string }>}  An object containing the access token.
   * @throws {RequestTimeoutException}  Throws a RequestTimeoutException if the password comparison fails.
   * @throws {UnauthorizedException}  Throws an UnauthorizedException if the password is invalid.
   */
  public async signIn(signinDto: SigninDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findOneByEmail(signinDto.email);
    let isEqual: boolean = false;
    try {
      isEqual = await this.hashingProvider.comparePassword(
        signinDto.password,
        user.password,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: `Could not compare passwords at this time.`,
      });
    }
    if (!isEqual) {
      throw new UnauthorizedException(`Invalid password`);
    }
    return await this.generateTokensProvider.generateTokens(user);
  }
}
