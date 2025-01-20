import { Exclude } from 'class-transformer';
import { Assembly } from 'src/assembly/assembly.entity';
import { Gene } from 'src/gene/gene.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Species entity class definition.
 */
@Entity()
export class Species {
  /**
   * Species identifier.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: 'int' })
  @Exclude()
  taxonId: number;

  /**
   * Species common name.
   * Must not be null or greater than 128 characters.
   * @type {string}
   */
  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  commonName: string;

  /**
   * Species scientific name.
   * Must not be null or greater than 40 characters.
   * @type {string}
   */
  @Column({
    type: 'varchar',
    length: 40,
    nullable: false,
  })
  scientificName: string;

  /**
   * Assemblies that belong to a species.
   * @type {string}
   */
  @OneToMany(() => Assembly, (assembly) => assembly.species)
  assemblies: Assembly[];

  /**
   * Genes that belong to a species.
   * @type {Gene[]}
   */
  @OneToMany(() => Gene, (gene) => gene.species)
  genes: Gene[];
}
