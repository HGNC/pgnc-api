import { Module } from '@nestjs/common';
import { NameController } from './name.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Name } from './name.entity';
import { RoleModule } from 'src/role/role.module';
import { NameService } from './name.service';

@Module({
    controllers: [NameController],
    imports: [TypeOrmModule.forFeature([Name]), RoleModule],
    providers: [NameService],
    exports: [NameService],
})
export class NameModule {}
