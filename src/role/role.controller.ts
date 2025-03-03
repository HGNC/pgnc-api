import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { RoleService } from './provider/role.service';
import { CreateRoleDto } from './dto/create/create-role.dto';

/**
 * Controller for Role. Creates routes for creating and deleting roles.
 */
@Controller('role')
@ApiTags('Role')
@ApiBearerAuth()
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    /**
     * Creates a new role.
     */
    @ApiOperation({ summary: 'Creates a new role' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'No content but successful creation',
    })
    @Post()
    public async create(@Body() createRoleDto: CreateRoleDto): Promise<void> {
        return this.roleService.create(createRoleDto);
    }
}
