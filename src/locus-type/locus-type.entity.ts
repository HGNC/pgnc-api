import { GeneLocusType } from 'src/gene-locus-type/gene-locus-type.entity';
import { LocusGroup } from 'src/locus-group/locus-group.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

/**
 * The LocusType entity represents the type of a locus/genetic marker.
 * Some may call this a BioType
 */
@Entity()
export class LocusType {
  /**
   * The unique identifier of the locus type.
   * @type {number}
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the locus type. Cannot be null or empty.
   * @type {string}
   */
  @Column({
    type: 'varchar',
    length: 45,
    unique: true,
    nullable: false,
  })
  name: string;

  /**
   * M:1 relationship with LocusGroup
   * @type {LocusGroup[]}
   */
  @ManyToOne(() => LocusGroup, (locusGroup) => locusGroup.locusTypes, {
    eager: true,
  })
  locusGroup: LocusGroup;

  @OneToMany(() => GeneLocusType, (geneLocusType) => geneLocusType.locusType)
  geneLocusTypes: GeneLocusType[];
}
