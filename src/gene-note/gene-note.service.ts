import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneService } from 'src/gene/gene.service';
import { NoteService } from 'src/note/note.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { GeneNote } from './gene-note.entity';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneNoteDto } from './dto/create/create-gene-note.dto';

@Injectable()
export class GeneNoteService {
    constructor(
        private readonly userService: UserService,
        private readonly geneService: GeneService,
        private readonly noteService: NoteService,
        @InjectRepository(GeneNote)
        private readonly geneNoteRepository: Repository<GeneNote>,
    ) {}

    public async create(
        createGeneNoteDto: CreateGeneNoteDto,
        user: ActiveUserInterface,
    ): Promise<GeneNote> {
        let author = undefined;
        let gene = undefined;
        let note = undefined;
        try {
            author = await this.userService.findById(user.sub);
            gene = await this.geneService.getById(createGeneNoteDto.gene);
            note = await this.noteService.getById(createGeneNoteDto.note);
        } catch (error) {
            throw new ConflictException(error);
        }
        const geneNote = this.geneNoteRepository.create({
            status: createGeneNoteDto.status,
            creator: author,
            gene: gene,
            note: note,
        });
        try {
            return await this.geneNoteRepository.save(geneNote);
        } catch (error) {
            throw new ConflictException(error, {
                description:
                    'Gene note creation failed. Make sure the note is unique',
            });
        }
    }
}
