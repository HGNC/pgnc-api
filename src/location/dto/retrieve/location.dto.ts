import { Expose, Exclude } from 'class-transformer';
import { coordSys } from 'src/location/enum/coord-sys.enum';
import { locationType } from 'src/location/enum/location-type.enum';

@Exclude()
export class LocationDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    refseqAccession: string;

    @Expose()
    genbankAccession: string;

    @Expose()
    coordSystem: coordSys;

    @Expose()
    type: locationType;
}
