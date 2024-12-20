import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Exclude, Expose, Type } from 'class-transformer';
import { nomenclatureType } from 'src/common/enum/nomenclature-type.enum';
import { NameDto } from './gene-name/name.dto';

@Exclude()
export class GeneNameDto {
  @Expose()
  geneId: number;

  @Expose()
  nameId: number;

  @Expose()
  type: nomenclatureType;

  @Expose()
  status: basicStatus;

  @Expose()
  creationDate: Date;

  @Expose()
  modDate: Date;

  @Expose()
  withdrawnDate?: Date;

  @Expose()
  @Type(() => NameDto)
  name: NameDto;
}
