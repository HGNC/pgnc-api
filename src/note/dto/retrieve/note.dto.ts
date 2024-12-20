import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class NoteDto {
  @Expose()
  id: number;
  @Expose()
  note: string;
}
