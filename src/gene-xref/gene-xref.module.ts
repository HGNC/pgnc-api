import { Module } from '@nestjs/common';
import { GeneXrefController } from './gene-xref.controller';
import { GeneXrefService } from './gene-xref.service';
import { XrefModule } from 'src/xref/xref.module';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneModule } from 'src/gene/gene.module';
import { RoleModule } from 'src/role/role.module';
import { GeneXref } from './gene-xref.entity';

@Module({
  controllers: [GeneXrefController],
  providers: [GeneXrefService],
  imports: [
    XrefModule,
    UserModule,
    GeneModule,
    TypeOrmModule.forFeature([GeneXref]),
    RoleModule,
  ],
})
export class GeneXrefModule {}
