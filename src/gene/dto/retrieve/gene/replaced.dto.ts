import { Exclude } from 'class-transformer';
import { GeneReplacementDto } from 'src/gene-replacement/dto/retrieve/gene-replacement.dto';

@Exclude()
export class ReplacedDto extends GeneReplacementDto {
  @Exclude()
  replacementId: number;
}
