import { Module } from '@nestjs/common';
import { GeneLocationService } from './gene-location.service';
import { GeneLocationController } from './gene-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { GeneModule } from 'src/gene/gene.module';
import { LocationModule } from 'src/location/location.module';
import { GeneLocation } from './gene-location.entity';
import { RoleModule } from 'src/role/role.module';

@Module({
    providers: [GeneLocationService],
    controllers: [GeneLocationController],
    imports: [
        UserModule,
        GeneModule,
        LocationModule,
        TypeOrmModule.forFeature([GeneLocation]),
        RoleModule,
    ],
})
export class GeneLocationModule {}
