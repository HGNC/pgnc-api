import { Module } from '@nestjs/common';
import { SymbolController } from './symbol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Symbol } from './symbol.entity';
import { SymbolService } from './symbol.service';
import { RoleModule } from 'src/role/role.module';

@Module({
    controllers: [SymbolController],
    providers: [SymbolService],
    imports: [TypeOrmModule.forFeature([Symbol]), RoleModule],
    exports: [SymbolService],
})
export class SymbolModule {}
