import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Gene } from 'src/gene/gene.entity';
import { LocusType } from 'src/locus-type/locus-type.entity';
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

@Entity({
  name: 'gene_has_locus_type',
})
export class GeneLocusType {
  @PrimaryColumn()
  geneId: number;

  @PrimaryColumn()
  locusTypeId: number;

  @Column({
    type: 'enum',
    enum: basicStatus,
    default: basicStatus.INTERNAL,
    nullable: false,
  })
  status: basicStatus;

  @ManyToOne(() => Gene, (gene) => gene.geneLocusTypes)
  @JoinColumn({ name: 'gene_id' })
  gene: Gene;

  @ManyToOne(() => LocusType, (locusType) => locusType.geneLocusTypes, {
    eager: true,
  })
  @JoinColumn({ name: 'locus_type_id' })
  locusType: LocusType;

  @CreateDateColumn()
  creationDate?: Date;

  @DeleteDateColumn()
  withdrawnDate?: Date;

  @UpdateDateColumn()
  modDate?: Date;

  @ManyToOne(() => User, (user) => user.geneNamesCreated)
  creator?: User;

  @ManyToOne(() => User, (user) => user.geneNamesEdited)
  editor?: User;
}
