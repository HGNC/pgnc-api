import { Module } from '@nestjs/common';
import { GeneReplacementController } from './gene-replacement.controller';
import { GeneReplacementService } from './gene-replacement.service';
import { UserModule } from 'src/user/user.module';
import { GeneModule } from 'src/gene/gene.module';
import { RoleModule } from 'src/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneReplacement } from './gene-replacement.entity';

@Module({
    controllers: [GeneReplacementController],
    providers: [GeneReplacementService],
    imports: [
        UserModule,
        GeneModule,
        RoleModule,
        TypeOrmModule.forFeature([GeneReplacement]),
    ],
})
export class GeneReplacementModule {}
