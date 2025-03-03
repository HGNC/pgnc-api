import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Gene } from 'src/gene/gene.entity';
import { User } from 'src/user/user.entity';
import { Location } from 'src/location/location.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'gene_has_location' })
export class GeneLocation {
    @PrimaryColumn()
    geneId: number;

    @PrimaryColumn()
    locationId: number;

    @Column({
        type: 'enum',
        enum: basicStatus,
        default: basicStatus.INTERNAL,
        nullable: false,
    })
    status: basicStatus;

    @ManyToOne(() => User, (user) => user.geneLocationsCreated)
    creator?: User;

    @ManyToOne(() => User, (user) => user.geneLocationsEdited)
    editor?: User;

    @ManyToOne(() => Gene, (gene) => gene.geneLocations)
    @JoinColumn({ name: 'gene_id' })
    gene: Gene;

    @ManyToOne(() => Location, (location) => location.geneLocations, {
        eager: true,
    })
    @JoinColumn({ name: 'location_id' })
    location: Location;

    @CreateDateColumn()
    creationDate: Date;

    @DeleteDateColumn()
    withdrawnDate?: Date;
}
