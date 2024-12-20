import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminCreateUserDto } from '../dto/create/admin-create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { HashingProvider } from 'src/auth/provider/hashing.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { Role } from 'src/role/role.entity';
import { RoleService } from 'src/role/provider/role.service';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateUserDto } from '../dto/create/create-user.dto';

/**
 * Provider for creating a new user. This provider is used by the user controller
 * to create a new user. This provider is also used by the auth provider to create
 * a new user when a user signs up and by the admin controller to create a new user
 * with a specific role.
 */
@Injectable()
export class CreateUserProvider {
  /**
   * Constructs a new instance of the CreateUserProvider.
   *
   * @param userRepository - The repository for managing User entities.
   * @param hashingProvider - The provider for hashing operations.
   * @param mailService - The service for sending emails.
   * @param roleService - The service for managing user roles.
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
    private readonly mailService: MailService,
    private readonly roleService: RoleService,
  ) {}

  /**
   * Creates a new user.
   */
  public async createUserWithRole(
    createUserDto: AdminCreateUserDto,
    user: ActiveUserInterface,
  ): Promise<User> {
    let existingUser = undefined;
    let roles: Role[] = undefined;
    let admin: User = undefined;
    try {
      existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
      admin = await this.userRepository.findOne({
        where: { id: user.sub },
      });
      roles = await this.roleService.findMultiple(createUserDto.roles);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to create user at the moment, please try later.',
        {
          description: 'The request to create a user timed out.',
          cause: error,
        },
      );
    }
    if (!admin) {
      throw new BadRequestException('Admin role does not exist for user.');
    }
    if (
      !admin.roles.some(
        (role) => role.name === 'admin' || role.name === 'master',
      )
    ) {
      throw new UnauthorizedException('Only admins can create new users.');
    }
    if (existingUser) {
      throw new BadRequestException(
        'User already exists, please check the email.',
      );
    }
    if (createUserDto.roles.length !== roles.length) {
      throw new BadRequestException('One or more roles do not exist.');
    }

    let newUser = this.userRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
      roles: roles,
    });
    try {
      newUser = await this.userRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to save user at the moment, please try later.',
        {
          description: `The request to save a user timed out. Error: ${String(error)}`,
        },
      );
    }
    try {
      await this.mailService.sendUserWelcome(newUser);
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
    return newUser;
  }

  /**
   * Creates a new user with the default role of user.
   */
  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to create user at the moment, please try later.',
        {
          description: 'The request to create a user timed out.',
          cause: error,
        },
      );
    }
    if (existingUser) {
      throw new BadRequestException(
        'User already exists, please check the email.',
      );
    }

    const roles = await this.roleService.findMultiple(['user']);
    let newUser = this.userRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
      roles: roles,
    });
    try {
      newUser = await this.userRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to save user at the moment, please try later.',
        {
          description: `The request to save a user timed out. Error: ${String(error)}`,
        },
      );
    }
    try {
      await this.mailService.sendUserWelcome(newUser);
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
    return newUser;
  }
}
