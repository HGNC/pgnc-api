import { GeneSymbol } from 'src/gene-symbol/gene-symbol.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The Symbol entity represents a symbol.
 */
@Entity()
export class Symbol {
    /**
     * The unique identifier of the symbol.
     * @type {number}
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * The name of the symbol. Cannot be null or empty and must be unique
     * with less than 45 characters.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 45,
        unique: true,
        nullable: false,
    })
    symbol: string;

    /**
     * The gene symbols that have this symbol.
     * @type {GeneSymbol[]}
     */
    @OneToMany(() => GeneSymbol, (geneSymbol) => geneSymbol.symbol)
    geneSymbols: GeneSymbol[];
}
