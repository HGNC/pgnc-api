import { SetMetadata } from '@nestjs/common';
import { ROLE_TYPE_KEY } from '../constant/auth.constant';
import { roleName } from 'src/role/enum/role-name.enum';

/**
 * A custom decorator to assign roles to a route.
 *
 * @param roleTypes The roles to assign to the route.
 *
 * @returns The assigned roles.
 */
export const Role = (...roleTypes: (roleName | string)[]) =>
    SetMetadata(ROLE_TYPE_KEY, roleTypes);
