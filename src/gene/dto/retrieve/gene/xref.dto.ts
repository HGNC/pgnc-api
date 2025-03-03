import { Exclude } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { GeneXrefDto } from 'src/gene-xref/dto/retrieve/gene-xref.dto';

@Exclude()
export class XrefDto extends GeneXrefDto {
    @Exclude()
    geneId: number;
    @Exclude()
    xrefId: number;
    @Exclude()
    status: basicStatus;
}
