import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Species controller class to handle species related routes.
 */
@Controller('species')
@ApiTags('Species')
export class SpeciesController {}
