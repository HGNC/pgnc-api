import {
    BadRequestException,
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
} from '@nestjs/common';
import { GetUserParamsDto } from './dto/retrieve/get-user-params.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import profileConfig from './config/profile.config';
import { AdminCreateUserDto } from './dto/create/admin-create-user.dto';
import { CreateUserProvider } from './provider/create-user.provider';
import { FindOneUserByEmailProvider } from './provider/find-one-user-by-email.provider';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateUserDto } from './dto/create/create-user.dto';

/**
 * Service that provides user-related operations.
 */
@Injectable()
export class UserService {
    /**
     * Constructs a new instance of the UserService.
     */
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @Inject(profileConfig.KEY)
        private readonly profileConfiguration: ConfigType<typeof profileConfig>,
        private readonly createUserProvider: CreateUserProvider,
        private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,
    ) {}

    /**
     * Retrieves a list of users based on the provided parameters.
     */
    public findAll(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getUserParamsDto: GetUserParamsDto,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        limit: number,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        page: number,
    ): void {
        throw new HttpException(
            {
                status: HttpStatus.NOT_IMPLEMENTED,
                error: 'Not Implemented',
            },
            HttpStatus.NOT_IMPLEMENTED,
            {
                cause: new Error(),
                description: 'This method is not yet implemented.',
            },
        );
    }

    /**
     * Method to create a new user as an admin.
     */
    public async createUserAsAdmin(
        createUserDto: AdminCreateUserDto,
        user: ActiveUserInterface,
    ): Promise<User> {
        return await this.createUserProvider.createUserWithRole(
            createUserDto,
            user,
        );
    }

    /**
     * Method to create a new user.
     */
    public async createUser(createUserDto: CreateUserDto): Promise<User> {
        return await this.createUserProvider.createUser(createUserDto);
    }

    /**
     * Retrieves a user by their unique identifier.
     */
    public async findById(id: number): Promise<User> {
        let user = undefined;
        try {
            user = await this.userRepository.findOneBy({ id });
        } catch (error) {
            throw new BadRequestException({
                description: 'User not found.',
                cause: error,
            });
        }
        if (!user) {
            throw new BadRequestException({
                description: `User not found: ${id}.`,
            });
        }
        return user;
    }

    /**
     * Retrieves a user by their email address.
     */
    public async findOneByEmail(email: string): Promise<User> {
        return await this.findOneUserByEmailProvider.findOneByEmail(email);
    }

    /**
     * Deletes the current active user.
     */
    public async deleteSelf(user: ActiveUserInterface) {
        return await this.userRepository.delete(user.sub);
    }
}
