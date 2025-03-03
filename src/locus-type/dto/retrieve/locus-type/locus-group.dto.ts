import { Exclude } from 'class-transformer';
import { LocusGroupDto as Parent } from 'src/locus-group/dto/retrieve/locus-group.dto';

@Exclude()
export class LocusGroupDto extends Parent {
    @Exclude()
    id: number;
}
