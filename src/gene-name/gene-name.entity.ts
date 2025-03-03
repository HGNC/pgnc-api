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
import { basicStatus } from 'src/common/enum/basic-status.enum';
import { nomenclatureType } from 'src/common/enum/nomenclature-type.enum';
import { Gene } from 'src/gene/gene.entity';
import { Name } from 'src/name/name.entity';
import { User } from 'src/user/user.entity';

@Entity({ name: 'gene_has_name' })
export class GeneName {
    @PrimaryColumn()
    geneId: number;

    @PrimaryColumn()
    nameId: number;

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

    @ManyToOne(() => Gene, (gene) => gene.geneNames)
    @JoinColumn({ name: 'gene_id' })
    gene: Gene;

    @ManyToOne(() => Name, (name) => name.geneNames, { eager: true })
    @JoinColumn({ name: 'name_id' })
    name: Name;

    @CreateDateColumn()
    creationDate?: Date;

    @UpdateDateColumn()
    modDate?: Date;

    @DeleteDateColumn()
    withdrawnDate?: Date;

    @ManyToOne(() => User, (user) => user.geneNamesCreated)
    creator?: User;

    @ManyToOne(() => User, (user) => user.geneNamesEdited)
    editor?: User;
}
