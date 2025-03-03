import { Exclude } from 'class-transformer';
import { LocusTypeDto as Parent } from 'src/locus-type/dto/retrieve/locus-type.dto';

@Exclude()
export class LocusTypeDto extends Parent {
    @Exclude()
    id: number;
}
