import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './provider/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';

/**
 * The RoleModule is responsible for handling role-related functionality.
 */
@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [TypeOrmModule.forFeature([Role])],
  exports: [RoleService],
})
export class RoleModule {}
