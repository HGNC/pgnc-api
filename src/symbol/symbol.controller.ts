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
import { SymbolService } from './symbol.service';
import { Symbol } from './symbol.entity';
import { roleTypes } from 'src/auth/enum/role-types.enum';
import { Role } from 'src/auth/decorator/role.decorator';
import { CreateSymbolDto } from './dto/create/create-symbol.dto';

@Controller('symbol')
@ApiTags('Symbol')
export class SymbolController {
  /**
   * Creates an instance of SymbolController.
   * @param {SymbolService} symbolService The symbol service.
   * @returns {void}
   */
  constructor(private readonly symbolService: SymbolService) {}

  /**
   * Retrieves a symbol by either ID or Symbol.
   * @param {number | string} query The query to search for a symbol.
   * @returns {Promise<Symbol>} The promise of a symbol.
   */
  @Get(':query')
  @Role(roleTypes.CURATOR)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Retrieve a symbol by either ID or Symbol - Must be at curator level or above',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
    // links: {
    //   'Get Symbol': {
    //     operationRef: '/symbol/{query}',
    //     parameters: {
    //       query: 1,
    //     },
    //   },
    // },
  })
  @ApiNotFoundResponse({
    description: 'The symbol was not found.',
  })
  @ApiParam({
    name: 'query',
    description: 'The symbol ID or the symbol itself.',
    required: true,
  })
  public getSymbols(@Param('query') query: number | string): Promise<Symbol> {
    return this.symbolService.findSymbol(query);
  }

  /**
   * Creates a new symbol.
   * @param {CreateSymbolDto} createSymbolDto The data to create a new symbol.
   * @throws {BadRequestException} If the symbol already exists.
   * @returns {Promise<Symbol>} The created symbol.
   */
  @Post()
  @Role(roleTypes.CURATOR)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new symbol - Must be at curator level or above',
  })
  @ApiResponse({
    status: 201,
    description: 'The symbol record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The symbol already exists.',
  })
  public createSymbol(
    @Body() createSymbolDto: CreateSymbolDto,
  ): Promise<Symbol> {
    return this.symbolService.create(createSymbolDto);
  }
}
