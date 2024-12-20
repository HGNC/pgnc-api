import { Module } from '@nestjs/common';
import { LocusGroupController } from './locus-group.controller';
import { LocusGroup } from './locus-group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocusGroupService } from './locus-group.service';

@Module({
  controllers: [LocusGroupController],
  imports: [TypeOrmModule.forFeature([LocusGroup])],
  providers: [LocusGroupService],
  exports: [LocusGroupService],
})
export class LocusGroupModule {}
