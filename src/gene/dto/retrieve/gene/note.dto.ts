import { Exclude } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { GeneNoteDto } from 'src/gene-note/dto/retrieve/gene-note.dto';

export class NoteDto extends GeneNoteDto {
    @Exclude()
    noteId: number;
    @Exclude()
    geneId: number;
    @Exclude()
    status: basicStatus;
}
