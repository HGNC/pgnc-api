import { Exclude } from 'class-transformer';
import { SymbolDto as Parent } from 'src/symbol/dto/retrieve/symbol.dto';

@Exclude()
export class SymbolDto extends Parent {
  @Exclude()
  id: number;
}
