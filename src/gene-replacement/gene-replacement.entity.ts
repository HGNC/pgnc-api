import { Gene } from 'src/gene/gene.entity';
import { User } from 'src/user/user.entity';
import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'gene_replacement' })
export class GeneReplacement {
    @PrimaryColumn()
    previousId: number;

    @PrimaryColumn()
    replacementId: number;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => User, (user) => user.geneReplacements, { nullable: false })
    editor: User;

    @ManyToOne(() => Gene, (gene) => gene.geneReplacements, {
        nullable: false,
    })
    @JoinColumn({ name: 'previous_id' })
    previousGene: Gene;

    @ManyToOne(() => Gene, (gene) => gene.genesReplaced, {
        nullable: false,
    })
    @JoinColumn({ name: 'replacement_id' })
    replacementGene: Gene;
}
