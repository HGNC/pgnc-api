import { Exclude } from 'class-transformer';
import { XrefDto as Parent } from 'src/xref/dto/retrieve/xref.dto';

@Exclude()
export class XrefDto extends Parent {
    @Exclude()
    id: number;
}
