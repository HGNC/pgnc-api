import { Exclude } from 'class-transformer';
import { ExternalResourceDto as Parent } from 'src/external-resource/dto/retrieve/external-resource.dto';

@Exclude()
export class ExternalResourceDto extends Parent {
    @Exclude()
    id: number;
}
