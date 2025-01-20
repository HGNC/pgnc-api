import { SpeciesDto as Parent } from 'src/species/dto/retrieve/species.dto';
import { Exclude } from 'class-transformer';

export class SpeciesDto extends Parent {
  // Add any additional properties or methods specific to GeneSpeciesDto here
  @Exclude()
  taxonId: number;
}
