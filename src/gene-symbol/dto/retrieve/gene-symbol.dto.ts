import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Exclude, Expose, Type } from 'class-transformer';
import { nomenclatureType } from 'src/common/enum/nomenclature-type.enum';
import { SymbolDto } from './gene-symbol/symbol.dto';

@Exclude()
export class GeneSymbolDto {
    @Expose()
    geneId: number;

    @Expose()
    symbolId: number;

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
    @Type(() => SymbolDto)
    symbol: SymbolDto;
}
