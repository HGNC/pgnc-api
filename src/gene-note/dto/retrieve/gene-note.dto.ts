import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Exclude, Expose, Type } from 'class-transformer';
import { NoteDto } from './gene-note/note.dto';

@Exclude()
export class GeneNoteDto {
    @Expose()
    geneId: number;

    @Expose()
    noteId: number;

    @Expose()
    createDate: Date;

    @Expose()
    modDate: Date;

    @Expose()
    withdrawnDate?: Date | null;

    @Expose()
    status: basicStatus;

    @Expose()
    @Type(() => NoteDto)
    note: NoteDto;
}
