// import { Assembly } from 'src/assembly/assembly.entity';
import {
    Column,
    Entity,
    // ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { coordSys } from './enum/coord-sys.enum';
import { locationType } from './enum/location-type.enum';
import { GeneLocation } from 'src/gene-location/gene-location.entity';

/**
 * Location entity class definition.
 */
@Entity()
export class Location {
    /**
     * Location identifier.
     * @type {number}
     */
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    /**
     * Location name.
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
     * RefSeq accession.
     * Must not be null or greater than 255 characters.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    refseqAccession: string;

    /**
     * GenBank accession.
     * Must not be null or greater than 255 characters.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    genbankAccession: string;

    /**
     * The name or descriptor of the coordinate system.
     * Must not be null or greater than 20 characters.
     */
    @Column({
        type: 'enum',
        enum: coordSys,
        default: coordSys.CHROMOSOME,
        nullable: false,
    })
    coordSystem: coordSys;

    /**
     * The type of location.
     */
    @Column({
        type: 'enum',
        enum: locationType,
        default: locationType.PRIMARY,
        nullable: false,
    })
    type: locationType;

    /**
     * The location connected to Assemblies.
     */
    // @ManyToMany(() => Assembly, (assembly) => assembly.locations, {
    //   eager: true,
    // })
    // assemblies: Assembly[];

    @OneToMany(() => GeneLocation, (geneLocation) => geneLocation.location)
    geneLocations: GeneLocation[];
}
