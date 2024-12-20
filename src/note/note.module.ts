import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { RoleModule } from 'src/role/role.module';
import { NoteService } from './note.service';

@Module({
  controllers: [NoteController],
  imports: [TypeOrmModule.forFeature([Note]), RoleModule],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {}
