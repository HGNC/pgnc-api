import {
    ExecutionContext,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/auth/config/jwt.config';
import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/auth/constant/auth.constant';
import { UserService } from 'src/user/user.service';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { AccessTokenGuard } from '../access-token/access-token.guard';

/**
 * Guard to check if the user has an admin or master role.
 * @extends {AccessTokenGuard}
 * @property {UserService} userService - The service to handle user operations.
 * @throws {UnauthorizedException} - Throws an exception if the token is not found or the user does not have the required role.
 */
@Injectable()
export class AdminRoleGuard extends AccessTokenGuard {
    /**
     * Constructor to create an instance of the AdminRoleGuard
     * @constructor
     * @param {JwtService} jwtService - Service to handle JWT operations.
     * @param {ConfigType<typeof jwtConfig>} jwtConf - JWT configuration.
     * @param {UserService} userService - Service to handle user operations.
     * @returns {AdminRoleGuard} - An instance of the AdminRoleGuard.
     * @throws {UnauthorizedException} - Throws an exception if the token is not found or the user does not have the required role.
     * @throws {UnauthorizedException} - Throws an exception if the user does not have the admin or master role.
     */
    constructor(
        protected readonly jwtService: JwtService,
        @Inject(jwtConfig.KEY)
        protected readonly jwtConf: ConfigType<typeof jwtConfig>,
        private readonly userService: UserService,
    ) {
        super(jwtService, jwtConf);
    }

    /**
     * Method to determine if the request can proceed based on the user's role.
     * @param {ExecutionContext} context - The execution context of the request.
     * @returns {Promise<boolean>} - Returns true if the user has an admin or master role, otherwise throws an UnauthorizedException.
     * @throws {UnauthorizedException} - Throws an exception if the token is not found or the user does not have the required role.
     * @throws {UnauthorizedException} - Throws an exception if the user does not have an admin or master role.
     */
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const token = this.extractRequestFromHeader(request);
        if (!token) {
            throw new UnauthorizedException('Token not found');
        }
        const payload = this.getPayloadFromContext(context);
        request[REQUEST_USER_KEY] = payload;
        const userId: number = request[REQUEST_USER_KEY].sub;
        const user = await this.userService.findById(userId);
        for (const role of user.roles) {
            if (
                [roleTypes.ADMIN, roleTypes.MASTER].includes(
                    role.role as roleTypes,
                )
            ) {
                return true;
            }
        }
        throw new UnauthorizedException(
            `User does not have a ${roleTypes.ADMIN} or ${roleTypes.MASTER} role`,
        );
    }
}
