import { Module } from '@nestjs/common';
import { XrefController } from './xref.controller';
import { XrefService } from './xref.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Xref } from './xref.entity';
import { ExternalResourceModule } from 'src/external-resource/external-resource.module';

@Module({
  controllers: [XrefController],
  imports: [TypeOrmModule.forFeature([Xref]), ExternalResourceModule],
  providers: [XrefService],
  exports: [XrefService],
})
export class XrefModule {}
