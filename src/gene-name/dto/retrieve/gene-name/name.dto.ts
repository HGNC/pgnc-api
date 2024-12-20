import { Exclude, Expose } from 'class-transformer';
import { NameDto as Parent } from 'src/name/dto/retrieve/name.dto';

@Exclude()
export class NameDto extends Parent {
  @Exclude()
  id: number;

  @Expose()
  name: string;
}
