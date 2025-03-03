import { ExternalResource } from 'src/external-resource/external-resource.entity';
import { GeneXref } from 'src/gene-xref/gene-xref.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Xref {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 30,
        unique: true,
        nullable: false,
    })
    displayId: string;

    @ManyToOne(
        () => ExternalResource,
        (externalResource) => externalResource.xrefs,
        {
            eager: true,
        },
    )
    @JoinColumn({ name: 'ext_resource_id' })
    externalResource: ExternalResource;

    @OneToMany(() => GeneXref, (geneXref) => geneXref.xref)
    geneXrefs: GeneXref[];
}
