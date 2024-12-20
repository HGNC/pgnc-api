import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

/**
 * Provider class to find a user by email.
 */
@Injectable()
export class FindOneUserByEmailProvider {
  /**
   * Initializes the provider with the user repository.
   * @param userRepository The repository for the user entity.
   * @throws RequestTimeoutException if the user cannot be found by email.
   * @throws UnauthorizedException if the email is not found.
   * @returns The user entity.
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Finds a user by email.
   * @param email The email of the user.
   * @throws RequestTimeoutException if the user cannot be found by email.
   * @throws UnauthorizedException if the email is not found.
   * @returns The user entity.
   */
  public async findOneByEmail(email: string) {
    let user: User | undefined;

    try {
      user = await this.userRepository.findOneBy({
        email: email,
      });
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: `Could not find user by email (${email}) at this time.`,
      });
    }

    if (!user) {
      throw new UnauthorizedException(`Email not found: ${email}`);
    }

    return user;
  }
}
