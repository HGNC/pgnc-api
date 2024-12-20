import { Module } from '@nestjs/common';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './species.entity';

/**
 * Species module class to handle species related routes.
 */
@Module({
  controllers: [SpeciesController],
  providers: [SpeciesService],
  imports: [TypeOrmModule.forFeature([Species])],
  exports: [SpeciesService],
})
export class SpeciesModule {}
