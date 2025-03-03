import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GeneReplacementDto {
    @Expose()
    previousId: number;

    @Expose()
    replacementId: number;

    @Expose()
    date: Date;
}
