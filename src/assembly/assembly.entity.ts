import { Species } from 'src/species/species.entity';
import { Location } from 'src/location/location.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Assembly entity class definition.
 */
@Entity()
export class Assembly {
  /**
   * Assembly identifier.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  /**
   * Assembly name.
   * Must not be null or greater than 255 characters.
   * @type {string}
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  /**
   * Assembly description.
   * Must not be null or greater than 255 characters.
   * @type {string}
   */
  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  genbankAccession: string;

  /**
   * Assembly description.
   * Must not be null or greater than 255 characters.
   * @type {string}
   */
  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  refseqAccession: string;

  /**
   * Is assembly current? The default is true.
   * @type {boolean}
   * @default true
   */
  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  current: boolean;

  /**
   * Is assembly the PGNC default? The default is true.
   * @type {boolean}
   * @default true
   */
  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  pgncDefault: boolean;

  /**
   * Assembly species.
   * @type {Species}
   */
  @ManyToOne(() => Species, (species) => species.assemblies)
  species: Species;

  /**
   * Assembly locations.
   * @type {Location[]}
   */
  // @ManyToMany(() => Location, (location) => location.assemblies)
  // @JoinTable({
  //   name: 'assembly_has_location',
  // })
  // locations: Location[];
}
