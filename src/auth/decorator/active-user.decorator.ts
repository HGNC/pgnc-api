import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ActiveUserInterface } from '../interface/active-user.interface';
import { REQUEST_USER_KEY } from '../constant/auth.constant';

/**
 * A custom decorator to extract the active user from the request.
 *
 * @param field The field to extract from the user object.
 *
 * @returns The active user or the specified field from the user object.
 */
export const ActiveUser = createParamDecorator(
  (field: keyof ActiveUserInterface | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: ActiveUserInterface = request[REQUEST_USER_KEY];
    return field ? user?.[field] : user;
  },
);
