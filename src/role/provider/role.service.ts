import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Role } from '../role.entity';
import { CreateRoleDto } from '../dto/create/create-role.dto';

/**
 * The service class for the Role module
 */
@Injectable()
export class RoleService {
    /**
     * Create a new instance of RoleService
     */
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}

    /**
     * Create a new role
     */
    public async create(createRoleDto: CreateRoleDto): Promise<void> {
        const role = await this.roleRepository.create({ ...createRoleDto });
        await this.roleRepository.save(role);
    }

    /**
     * Find multiple roles by their names
     */
    public async findMultiple(roles: string[]): Promise<Role[]> {
        const results = await this.roleRepository.find({
            where: {
                role: In(roles),
            },
        });
        return results;
    }

    /**
     * Delete a role
     */
    public async delete(roleId: number): Promise<void> {
        await this.roleRepository.delete(roleId);
    }
}
