import { Exclude } from 'class-transformer';
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { GeneLocationDto } from 'src/gene-location/dto/retrieve/gene-location.dto';

@Exclude()
export class LocationDto extends GeneLocationDto {
    @Exclude()
    geneId: number;

    @Exclude()
    locationId: number;

    @Exclude()
    status: basicStatus;
}
