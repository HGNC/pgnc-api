import { Exclude } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { GeneLocusTypeDto } from 'src/gene-locus-type/dto/retrieve/gene-locus-type.dto';

@Exclude()
export class LocusTypeDto extends GeneLocusTypeDto {
    @Exclude()
    geneId: number;

    @Exclude()
    locusTypeId: number;

    @Exclude()
    status: basicStatus;
}
