import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Gene } from 'src/gene/gene.entity';
import { User } from 'src/user/user.entity';
import { Xref } from 'src/xref/xref.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'gene_has_xref' })
export class GeneXref {
  @PrimaryColumn()
  geneId: number;

  @PrimaryColumn()
  xrefId: number;

  @Column({
    type: 'enum',
    enum: basicStatus,
    default: basicStatus.INTERNAL,
    nullable: false,
  })
  status: basicStatus;

  @CreateDateColumn()
  creationDate?: Date;

  @DeleteDateColumn()
  withdrawnDate?: Date;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
    default: 'curator',
  })
  source: string;

  @ManyToOne(() => Xref, (xref) => xref.geneXrefs, { eager: true })
  @JoinColumn({ name: 'xref_id' })
  xref: Xref;

  @ManyToOne(() => User, (user) => user.geneNamesCreated)
  creator?: User;

  @ManyToOne(() => User, (user) => user.geneNamesEdited)
  editor?: User;

  @ManyToOne(() => Gene, (gene) => gene.geneXrefs)
  @JoinColumn({ name: 'gene_id' })
  gene: Gene;
}
