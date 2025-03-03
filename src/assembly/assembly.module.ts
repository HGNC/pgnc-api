import { Module } from '@nestjs/common';
import { AssemblyController } from './assembly.controller';
import { AssemblyService } from './assembly.service';
import { Assembly } from './assembly.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [AssemblyController],
    providers: [AssemblyService],
    imports: [TypeOrmModule.forFeature([Assembly])],
})
export class AssemblyModule {}
