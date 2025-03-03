import { Exclude } from 'class-transformer';
import { LocationDto as Parent } from 'src/location/dto/retrieve/location.dto';

@Exclude()
export class LocationDto extends Parent {
    @Exclude()
    id: number;
}
