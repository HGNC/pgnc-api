import { Exclude } from 'class-transformer';
import { GeneReplacementDto } from 'src/gene-replacement/dto/retrieve/gene-replacement.dto';

@Exclude()
export class ReplacementDto extends GeneReplacementDto {
    @Exclude()
    previousId: number;
}
