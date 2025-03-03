import { GeneNote } from 'src/gene-note/gene-note.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        nullable: false,
        unique: true,
    })
    note: string;

    @OneToMany(() => GeneNote, (geneNote) => geneNote.note)
    geneNotes: GeneNote[];
}
