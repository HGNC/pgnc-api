import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { AdminRoleGuard } from './admin.role.guard';
import { CuratorRoleGuard } from './curator.role.guard';
import { MasterRoleGuard } from './master.role.guard';
import { UserRoleGuard } from './user.role.guard';
import { ROLE_TYPE_KEY } from 'src/auth/constant/auth.constant';

/**
 * Guard to check if the user has the required role.
 * @implements {CanActivate}
 * @property {Reflector} reflector - The reflector to get metadata from the request.
 * @property {AdminRoleGuard} adminRoleGuard - The guard to check if the user has an admin role.
 * @property {CuratorRoleGuard} curatorRoleGuard - The guard to check if the user has a curator role.
 * @property {UserRoleGuard} userRoleGuard - The guard to check if the user has a user role.
 * @property {MasterRoleGuard} masterRoleGuard - The guard to check if the user has a master role.
 * @property {Record<keyof typeof roleTypes | string, CanActivate | CanActivate[]>} roleGuardMap - The map of role types to their respective guards.
 * @property {string} defaultRoleType - The default role type to use if no role type is found.
 * @throws {UnauthorizedException} - Throws an exception if the user does not have the required role or a valid token.
 */
@Injectable()
export class RoleGuard implements CanActivate {
  /**
   * Constructor to create an instance of the RoleGuard
   * @constructor
   * @param {Reflector} reflector - The reflector to get metadata from the request.
   * @param {AdminRoleGuard} adminRoleGuard - The guard to check if the user has an admin role.
   * @param {CuratorRoleGuard} curatorRoleGuard - The guard to check if the user has a curator role.
   * @param {UserRoleGuard} userRoleGuard - The guard to check if the user has a user role.
   * @param {MasterRoleGuard} masterRoleGuard - The guard to check if the user has a master role.
   * @returns {RoleGuard} - An instance of the RoleGuard.
   * @throws {UnauthorizedException} - Throws an exception if the user does not have the required role or a valid token.
   */
  constructor(
    private readonly reflector: Reflector,
    private readonly adminRoleGuard: AdminRoleGuard,
    private readonly curatorRoleGuard: CuratorRoleGuard,
    private readonly userRoleGuard: UserRoleGuard,
    private readonly masterRoleGuard: MasterRoleGuard,
  ) {}

  /**
   * The default role type to use if no role type is found.
   * @type {string}
   */
  private static readonly defaultRoleType = roleTypes.MASTER;

  /**
   * Map of role types to their respective guards.
   * @type {Record<keyof typeof roleTypes | string, CanActivate | CanActivate[]>}
   */
  private readonly roleGuardMap: Record<
    keyof typeof roleTypes | string,
    CanActivate | CanActivate[]
  > = {
    [roleTypes.ADMIN]: this.adminRoleGuard,
    [roleTypes.CURATOR]: this.curatorRoleGuard,
    [roleTypes.MASTER]: this.masterRoleGuard,
    [roleTypes.USER]: this.userRoleGuard,
    [roleTypes.NA]: { canActivate: () => true },
  };

  /**
   * Method to determine if the request can proceed based on the user's role.
   * @param {ExecutionContext} context - The execution context of the request.
   * @returns {Promise<boolean>} - Returns true if the user has the required role, otherwise throws an UnauthorizedException.
   * @throws {UnauthorizedException} - Throws an exception if the user does not have the required role or a valid token.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roleType = this.reflector.getAllAndOverride(ROLE_TYPE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]) ?? [RoleGuard.defaultRoleType];
    const guards = roleType.map((type) => this.roleGuardMap[type]).flat();
    let error = new UnauthorizedException();
    for (const inst of guards) {
      const canActivate = await Promise.resolve(
        inst.canActivate(context),
      ).catch((err) => {
        error = err;
      });
      if (canActivate) {
        return true;
      }
    }
    throw error;
  }
}
