import { Module } from '@nestjs/common';
import { GeneLocusTypeController } from './gene-locus-type.controller';
import { GeneLocusTypeService } from './gene-locus-type.service';
import { LocusTypeModule } from 'src/locus-type/locus-type.module';
import { UserModule } from 'src/user/user.module';
import { RoleModule } from 'src/role/role.module';
import { GeneModule } from 'src/gene/gene.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneLocusType } from './gene-locus-type.entity';

@Module({
    controllers: [GeneLocusTypeController],
    providers: [GeneLocusTypeService],
    imports: [
        LocusTypeModule,
        UserModule,
        RoleModule,
        GeneModule,
        TypeOrmModule.forFeature([GeneLocusType]),
    ],
})
export class GeneLocusTypeModule {}
