import { LocusType } from 'src/locus-type/locus-type.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

/**
 * The LocusGroup entity represents a group of locus types.
 */
@Entity()
export class LocusGroup {
  /**
   * The unique identifier of the locus group.
   * @type {number}
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the locus group. Cannot be null or empty and must be unique
   * with less than 45 characters.
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
   * 1:M relationship with LocusType
   * @type {LocusType[]}
   */
  @OneToMany(() => LocusType, (locusType) => locusType.locusGroup)
  locusTypes: LocusType[];
}
