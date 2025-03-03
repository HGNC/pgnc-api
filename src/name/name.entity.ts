import { GeneName } from 'src/gene-name/gene-name.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The Name entity represents a name.
 */
@Entity()
export class Name {
    /**
     * The unique identifier of the name.
     * @type {number}
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * The actual name. Cannot be null or empty and must be unique
     * with less than 255 characters.
     * @type {string}
     */
    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: false,
    })
    name: string;

    /**
     * The gene names that have this name.
     * @type {GeneName[]}
     */
    @OneToMany(() => GeneName, (geneName) => geneName.name)
    geneNames: GeneName[];
}
