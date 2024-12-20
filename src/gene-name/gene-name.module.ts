import { Module } from '@nestjs/common';
import { GeneNameController } from './gene-name.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneName } from './gene-name.entity';
import { GeneNameService } from './gene-name.service';
import { RoleModule } from 'src/role/role.module';
import { GeneModule } from 'src/gene/gene.module';
import { UserModule } from 'src/user/user.module';
import { NameModule } from 'src/name/name.module';

@Module({
  controllers: [GeneNameController],
  providers: [GeneNameService],
  imports: [
    NameModule,
    UserModule,
    GeneModule,
    TypeOrmModule.forFeature([GeneName]),
    RoleModule,
  ],
})
export class GeneNameModule {}
