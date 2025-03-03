import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { RoleModule } from 'src/role/role.module';

@Module({
    controllers: [LocationController],
    providers: [LocationService],
    imports: [TypeOrmModule.forFeature([Location]), RoleModule],
    exports: [LocationService],
})
export class LocationModule {}
