import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Exclude, Expose, Type } from 'class-transformer';
import { LocationDto } from './gene-location/location.dto';

@Exclude()
export class GeneLocationDto {
  @Expose()
  geneId: number;

  @Expose()
  locationId: number;

  @Expose()
  status: basicStatus;

  @Expose()
  creationDate: Date;

  @Expose()
  withdrawnDate?: Date;

  @Expose()
  @Type(() => LocationDto)
  location: LocationDto;
}
