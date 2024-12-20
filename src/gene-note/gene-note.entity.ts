import { basicStatus } from 'src/common/enum/basic-status.enum';
import { Gene } from 'src/gene/gene.entity';
import { Note } from 'src/note/note.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'gene_has_note' })
export class GeneNote {
  @PrimaryColumn()
  geneId: number;

  @PrimaryColumn()
  noteId: number;

  @Column({
    type: 'enum',
    enum: basicStatus,
    default: basicStatus.INTERNAL,
  })
  status: basicStatus;

  @ManyToOne(() => Gene, (gene) => gene.geneNotes)
  @JoinColumn({ name: 'gene_id' })
  gene: Gene;

  @ManyToOne(() => Note, (note) => note.geneNotes, { eager: true })
  @JoinColumn({ name: 'note_id' })
  note: Note;

  @ManyToOne(() => User, (user) => user.geneNotesCreated)
  creator?: User;

  @CreateDateColumn()
  creationDate?: Date;

  @ManyToOne(() => User, (user) => user.geneNotesEdited)
  editor?: User;

  @DeleteDateColumn()
  withdrawnDate?: Date;
}
