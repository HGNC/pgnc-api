import { Gene } from 'src/gene/gene.entity';
import { User } from 'src/user/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class GeneHistory {
    /**
     * The unique identifier of the gene history.
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * The value before the update.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    pre_update_value: string;

    /**
     * The value after the update.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    post_update_value: string;

    /**
     * The field that was updated.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
    })
    field: string;

    /**
     * The date of the update.
     * @type {Date}
     */
    @CreateDateColumn()
    update_date: Date;

    /**
     * The user that made the update.
     * @type {User}
     * @references User
     */
    @ManyToOne(() => User, (user) => user.id, { eager: true })
    editor: User;

    /**
     * The gene that was updated.
     * @type {Gene}
     * @references Gene
     */
    @ManyToOne(() => Gene, (gene) => gene.id, { eager: true })
    gene: Gene;
}
