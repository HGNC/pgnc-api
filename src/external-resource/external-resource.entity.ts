import { Xref } from 'src/xref/xref.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExternalResource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  name: string;

  @OneToMany(() => Xref, (xref) => xref.externalResource)
  xrefs: Xref[];
}
