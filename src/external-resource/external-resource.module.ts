import { Module } from '@nestjs/common';
import { ExternalResourceController } from './external-resource.controller';
import { ExternalResource } from './external-resource.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalResourceService } from './external-resource.service';

@Module({
    controllers: [ExternalResourceController],
    imports: [TypeOrmModule.forFeature([ExternalResource])],
    providers: [ExternalResourceService],
    exports: [ExternalResourceService],
})
export class ExternalResourceModule {}
