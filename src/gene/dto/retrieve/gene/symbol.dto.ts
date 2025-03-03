import { Exclude } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { GeneSymbolDto } from 'src/gene-symbol/dto/retrieve/gene-symbol.dto';

@Exclude()
export class SymbolDto extends GeneSymbolDto {
    @Exclude()
    geneId: number;

    @Exclude()
    symbolId: number;

    @Exclude()
    status: basicStatus;
}
