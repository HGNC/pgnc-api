import { roleName } from 'src/role/enum/role-name.enum';
/**
 * Interface representing an active user.
 */
export interface ActiveUserInterface {
  /**
   * The unique identifier of the user.
   */
  sub: number;
  /**
   * The email address of the user.
   */
  email: string;
  /**
   * The roles assigned to the user.
   */
  roles: roleName[];
}
