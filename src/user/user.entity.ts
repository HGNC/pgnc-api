import { Exclude } from 'class-transformer';
import { GeneLocation } from 'src/gene-location/gene-location.entity';
import { GeneName } from 'src/gene-name/gene-name.entity';
import { GeneNote } from 'src/gene-note/gene-note.entity';
import { GeneReplacement } from 'src/gene-replacement/gene-replacement.entity';
import { GeneSymbol } from 'src/gene-symbol/gene-symbol.entity';
import { Gene } from 'src/gene/gene.entity';
import { Role } from 'src/role/role.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * User entity class to represent the user table in the database.
 */
@Entity()
export class User {
    /**
     * The id of the user. It is the primary key of the user table.
     */
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    /**
     * The display name of the user.
     * It is a required field, which is a string/varchar with a maximum length of 96 characters.
     */
    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
    })
    displayName: string;

    /**
     * The first name of the user.
     * It is a required field, which is a string/varchar with a maximum length of 96 characters.
     */
    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
    })
    firstName: string;

    /**
     * The last name of the user.
     * It is an optional field, which is a string/varchar with a maximum length of 96 characters.
     */
    @Column({
        type: 'varchar',
        length: 96,
        nullable: true,
    })
    lastName?: string;

    /**
     * The email of the user.
     * It is a required field, which is a string/varchar with a maximum length of 255 characters.
     * It is also unique, meaning that no two users can have the same email.
     */
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        unique: true,
    })
    email: string;

    /**
     * The current status of the user.
     * It is a required field, which is a boolean.
     */
    @Column({
        type: 'bool',
        nullable: false,
        default: true,
    })
    @Exclude()
    current: boolean;

    /**
     * The current password of the user.
     * It is a required field, which is a string/varchar with a maximum length of 70 characters.
     */
    @Column({
        type: 'varchar',
        length: 70,
        nullable: false,
    })
    @Exclude()
    password: string;

    /**
     * The roles assigned to the user.
     * It is a many-to-many relationship with the role table.
     * It is an eager relationship, meaning that the roles are loaded when the user is loaded.
     */
    @ManyToMany(() => Role, (role) => role.users, {
        eager: true,
    })
    @JoinTable({
        name: 'user_has_role',
    })
    @Exclude()
    roles: Role[];

    /**
     * The genes created by the user.
     * It is a one-to-many relationship with the gene table.
     */
    @OneToMany(() => Gene, (gene) => gene.creator)
    genesCreated: Gene[];

    /**
     * The genes edited by the user.
     * It is a one-to-many relationship with the gene table.
     */
    @OneToMany(() => Gene, (gene) => gene.editor)
    genesEdited: Gene[];

    /**
     * The symbols created by the user.
     * It is a one-to-many relationship with the gene_has_symbol table.
     */
    @OneToMany(() => GeneSymbol, (geneSymbol) => geneSymbol.creator)
    geneSymbolsCreated: GeneSymbol[];

    /**
     * The symbols edited by the user.
     * It is a one-to-many relationship with the gene_has_symbol table.
     */
    @OneToMany(() => GeneSymbol, (geneSymbol) => geneSymbol.editor)
    geneSymbolsEdited: GeneSymbol[];

    /**
     * The names created by the user.
     * It is a one-to-many relationship with the gene_has_name table.
     */
    @OneToMany(() => GeneName, (geneName) => geneName.creator)
    geneNamesCreated: GeneName[];

    /**
     * The symbols edited by the user.
     * It is a one-to-many relationship with the gene_has_name table.
     */
    @OneToMany(() => GeneName, (geneName) => geneName.editor)
    geneNamesEdited: GeneName[];

    @OneToMany(() => GeneNote, (geneNote) => geneNote.creator)
    geneNotesCreated: GeneNote[];

    @OneToMany(() => GeneNote, (geneNote) => geneNote.editor)
    geneNotesEdited: GeneNote[];

    @OneToMany(
        () => GeneReplacement,
        (geneReplacement) => geneReplacement.editor,
    )
    geneReplacements: GeneReplacement[];

    @OneToMany(() => GeneLocation, (geneLocation) => geneLocation.creator)
    geneLocationsCreated: GeneLocation[];

    @OneToMany(() => GeneLocation, (geneLocation) => geneLocation.editor)
    geneLocationsEdited: GeneLocation[];
}
