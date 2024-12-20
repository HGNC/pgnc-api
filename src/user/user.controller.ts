import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { AdminCreateUserDto } from './dto/create/admin-create-user.dto';
import { User } from './user.entity';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateUserDto } from './dto/create/create-user.dto';
import { Role } from 'src/auth/decorator/role.decorator';
import { roleTypes } from 'src/auth/enum/role-types.enum';

/**
 * The UserController is responsible for handling user-related HTTP requests.
 * It uses the UserService to perform operations related to users.
 */
@Controller('user')
@ApiTags('User')
export class UserController {
  /**
   * Creates an instance of UserController.
   */
  public constructor(private readonly userService: UserService) {}

  /**
   * Retrieves users based on a user ID provided in the path.
   */
  @Get('/:id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the user',
    required: false,
    type: 'positive integer',
  })
  @ApiOperation({
    summary:
      'Fetches all users or a specific user by ID - Must be a curator or an admin',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns users or a specific user based on the query',
  })
  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Role(roleTypes.CURATOR)
  public getUsers(@Param('id') userId: number): Promise<User> {
    return this.userService.findById(userId);
  }

  /**
   * Creates a new user using Admin rights. Will allow an admin to assign a particular role to the user.
   */
  @ApiBearerAuth()
  @Role(roleTypes.ADMIN)
  @ApiOperation({
    summary: 'Creates a new user and assign a role - Must be an Admin to use',
  })
  @ApiResponse({
    status: 201,
    description: 'Returns the created user',
  })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('admin')
  public adminCreateUser(
    @Body() createUserDto: AdminCreateUserDto,
    @ActiveUser() user: ActiveUserInterface,
  ): Promise<User> {
    return this.userService.createUserAsAdmin(createUserDto, user);
  }

  /**
   * Creates a new user with user rights only.
   */
  @ApiOperation({ summary: 'Creates a new user with a role of user' })
  @ApiResponse({
    status: 201,
    description: 'Returns the created user',
  })
  @UseInterceptors(ClassSerializerInterceptor)
  @Role(roleTypes.NA)
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  /**
   * Delete the current active user.
   */
  @ApiOperation({ summary: 'Delete the current active user' })
  @ApiResponse({
    status: 200,
    description: 'Returns the deleted user',
  })
  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Role(roleTypes.USER)
  @Delete('forget-me')
  public deleteSelf(@ActiveUser() user: ActiveUserInterface) {
    return this.userService.deleteSelf(user);
  }
}
