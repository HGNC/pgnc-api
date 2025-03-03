import { Exclude } from 'class-transformer';
import { NoteDto as Parent } from 'src/note/dto/retrieve/note.dto';
@Exclude()
export class NoteDto extends Parent {
    @Exclude()
    id: number;
}
