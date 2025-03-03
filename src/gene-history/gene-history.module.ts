import { Module } from '@nestjs/common';
import { GeneHistory } from './gene-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([GeneHistory])],
})
export class GeneHistoryModule {}
