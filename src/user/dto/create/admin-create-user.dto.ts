import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray, IsEnum } from 'class-validator';
import { roleName } from 'src/role/enum/role-name.enum';
import { CreateUserDto } from './create-user.dto';

/**
 * Data transfer object for creating a user
 */
export class AdminCreateUserDto extends CreateUserDto {
  /**
   * A list of roles that the user has been assigned
   */
  @IsArray()
  @IsEnum(roleName, { each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty({
    enum: roleName,
    description: 'A list of roles that the user has been assigned',
    example: ['user'],
  })
  roles: roleName[];
}
