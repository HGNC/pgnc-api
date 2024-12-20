import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { roleName } from 'src/role/enum/role-name.enum';

/**
 * Data transfer object for creating a role.
 */
export class CreateRoleDto {
  /**
   * The name of the role.
   */
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    enum: roleName,
    description: 'The name of the role',
    example: 'user',
  })
  name: roleName;
}
