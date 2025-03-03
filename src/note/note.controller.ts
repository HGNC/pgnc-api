import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiNotFoundResponse,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { NoteService } from './note.service';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create/create-note.dto';

@Controller('note')
@ApiTags('Note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Get(':id')
    @Role(roleTypes.CURATOR)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Retrieve a note by ID - Must be at curator level or above',
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
    })
    @ApiNotFoundResponse({
        description: 'The note was not found.',
    })
    @ApiParam({
        name: 'id',
        description: 'The ID of the note to retrieve.',
        example: 1,
    })
    async getNoteById(@Param('id') id: number): Promise<Note> {
        return this.noteService.getById(id);
    }

    @Post()
    @Role(roleTypes.CURATOR)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Create a new note - Must be at curator level or above',
    })
    @ApiResponse({
        status: 201,
        description: 'The note record has been successfully created.',
    })
    @ApiBadRequestResponse({
        description: 'The note already exists.',
    })
    public createNote(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.noteService.create(createNoteDto);
    }
}
