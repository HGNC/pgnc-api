import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class SymbolDto {
    @Expose()
    id: number;

    @Expose()
    symbol: string;
}
