import { Exclude } from 'class-transformer';
import { SpeciesDto as Parent } from 'src/species/dto/retrieve/species.dto';

@Exclude()
export class SpeciesDto extends Parent {
    @Exclude()
    id: number;
}
