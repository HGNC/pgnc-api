import { GeneNameDto } from 'src/gene-name/dto/retrieve/gene-name.dto';
import { Exclude } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';

export class NameDto extends GeneNameDto {
  @Exclude()
  geneId: number;
  @Exclude()
  nameId: number;
  @Exclude()
  status: basicStatus;
}
