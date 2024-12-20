import { Module } from '@nestjs/common';
import { GeneSymbolController } from './gene-symbol.controller';
import { GeneSymbol } from './gene-symbol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneSymbolService } from './gene-symbol.service';
import { SymbolModule } from 'src/symbol/symbol.module';
import { GeneModule } from 'src/gene/gene.module';
import { UserModule } from 'src/user/user.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  controllers: [GeneSymbolController],
  providers: [GeneSymbolService],
  imports: [
    SymbolModule,
    UserModule,
    GeneModule,
    TypeOrmModule.forFeature([GeneSymbol]),
    RoleModule,
  ],
})
export class GeneSymbolModule {}
