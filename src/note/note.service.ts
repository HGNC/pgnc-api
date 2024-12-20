import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create/create-note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  public async create(createNoteDto: CreateNoteDto): Promise<Note> {
    let note: Note;
    note = await this.noteRepository.create({ ...createNoteDto });
    try {
      note = await this.noteRepository.save(note);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as any).code === '23505'
      ) {
        throw new BadRequestException('Note already exists');
      }
    }
    return note;
  }

  public async update(
    noteId: number,
    updateNoteDto: CreateNoteDto,
  ): Promise<Note> {
    let note: Note;
    try {
      note = await this.noteRepository.findOne({
        where: { id: noteId },
      });
    } catch (error) {
      throw new RequestTimeoutException({
        description:
          'The request to the database timed out. Failed to find the note.',
        cause: error,
      });
    }
    if (!note) {
      throw new BadRequestException('Note ID does not exist');
    }
    note.note = updateNoteDto.note;
    try {
      await this.noteRepository.save(note);
    } catch (error) {
      throw new RequestTimeoutException({
        description: 'Failed to update the name',
        cause: error,
      });
    }
    return note;
  }

  public async getById(noteId: number): Promise<Note> {
    let note: Note;
    try {
      note = await this.noteRepository.findOne({
        where: { id: noteId },
      });
    } catch (error) {
      throw new RequestTimeoutException({
        description:
          'The request to the database timed out. Failed to find the note.',
        cause: error,
      });
    }
    if (!note) {
      throw new BadRequestException('Note ID does not exist');
    }
    return note;
  }

  public async deleteById(noteId: number): Promise<void> {
    try {
      await this.noteRepository.delete({ id: noteId });
    } catch (error) {
      throw new RequestTimeoutException({
        description: 'Failed to delete the note',
        cause: error,
      });
    }
  }
}
