import { Module } from '@nestjs/common';
import { LocusTypeController } from './locus-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocusType } from './locus-type.entity';
import { LocusTypeService } from './locus-type.service';
import { LocusGroupModule } from 'src/locus-group/locus-group.module';

@Module({
    controllers: [LocusTypeController],
    imports: [TypeOrmModule.forFeature([LocusType]), LocusGroupModule],
    providers: [LocusTypeService],
    exports: [LocusTypeService],
})
export class LocusTypeModule {}
