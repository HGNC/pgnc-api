import { Module } from '@nestjs/common';
import { GeneNoteController } from './gene-note.controller';
import { GeneNoteService } from './gene-note.service';
import { NoteModule } from 'src/note/note.module';
import { UserModule } from 'src/user/user.module';
import { GeneModule } from 'src/gene/gene.module';
import { RoleModule } from 'src/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneNote } from './gene-note.entity';

@Module({
    controllers: [GeneNoteController],
    providers: [GeneNoteService],
    imports: [
        NoteModule,
        UserModule,
        GeneModule,
        RoleModule,
        TypeOrmModule.forFeature([GeneNote]),
    ],
})
export class GeneNoteModule {}
