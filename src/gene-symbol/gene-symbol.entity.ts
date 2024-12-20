import { basicStatus } from 'src/common/enum/basic-status.enum';
import { nomenclatureType } from 'src/common/enum/nomenclature-type.enum';
import { Gene } from 'src/gene/gene.entity';
import { Symbol } from 'src/symbol/symbol.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * The entity class for the gene symbol.
 */
@Entity({ name: 'gene_has_symbol' })
export class GeneSymbol {
  @PrimaryColumn()
  geneId: number;
  @PrimaryColumn()
  symbolId: number;

  @Column({
    type: 'enum',
    enum: nomenclatureType,
    default: nomenclatureType.ALIAS,
    nullable: false,
  })
  type: nomenclatureType;

  @Column({
    type: 'enum',
    enum: basicStatus,
    default: basicStatus.INTERNAL,
    nullable: false,
  })
  status: basicStatus;

  @ManyToOne(() => Gene, (gene) => gene.geneSymbols)
  @JoinColumn({ name: 'gene_id' })
  gene: Gene;

  @ManyToOne(() => Symbol, (symbol) => symbol.geneSymbols, { eager: true })
  @JoinColumn({ name: 'symbol_id' })
  symbol: Symbol;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  modDate?: Date;

  @DeleteDateColumn()
  withdrawnDate?: Date;

  @ManyToOne(() => User, (user) => user.geneNamesCreated)
  creator?: User;

  @ManyToOne(() => User, (user) => user.geneNamesEdited)
  editor?: User;
}
