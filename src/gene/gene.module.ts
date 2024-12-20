import { Module } from '@nestjs/common';
import { GeneController } from './gene.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gene } from './gene.entity';
import { GeneService } from './gene.service';
import { UserModule } from 'src/user/user.module';
import { CreateGeneProvider } from './provider/create-gene.provider';
import { SpeciesModule } from 'src/species/species.module';
import { PaginationModule } from 'src/common/pagination/pagination.module';
import { RoleModule } from 'src/role/role.module';
import { GeneSymbol } from 'src/gene-symbol/gene-symbol.entity';
import { GeneName } from 'src/gene-name/gene-name.entity';
import { GeneNote } from 'src/gene-note/gene-note.entity';
import { GeneReplacement } from 'src/gene-replacement/gene-replacement.entity';
import { GeneLocation } from 'src/gene-location/gene-location.entity';
import { GeneXref } from 'src/gene-xref/gene-xref.entity';
import { GeneHistory } from 'src/gene-history/gene-history.entity';

/**
 * Gene module class to handle gene related routes.
 */
@Module({
  controllers: [GeneController],
  imports: [
    UserModule,
    TypeOrmModule.forFeature([
      Gene,
      GeneSymbol,
      GeneName,
      GeneNote,
      GeneReplacement,
      GeneXref,
      GeneLocation,
      GeneHistory,
    ]),
    SpeciesModule,
    PaginationModule,
    RoleModule,
  ],
  exports: [GeneService],
  providers: [GeneService, CreateGeneProvider],
})
export class GeneModule {}
