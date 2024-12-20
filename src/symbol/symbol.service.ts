import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { QueryFailedError, Repository } from 'typeorm';
import { Symbol } from './symbol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSymbolDto } from './dto/create/create-symbol.dto';

/**
 * The SymbolService class is a provider that manages the symbols.
 */
@Injectable()
export class SymbolService {
  /**
   * Creates an instance of SymbolService.
   * @param {Repository<Symbol>} symbolRepository The symbol repository.
   */
  constructor(
    @InjectRepository(Symbol)
    private readonly symbolRepository: Repository<Symbol>,
  ) {}

  /**
   * Creates a new symbol. If the symbol already exists, it throws an error.
   * @param {CreateSymbolDto} createSymbolDto The data to create a new symbol.
   * @returns {Promise<Symbol>} The created symbol.
   */
  public async create(createSymbolDto: CreateSymbolDto): Promise<Symbol> {
    let symbol: Symbol;
    symbol = await this.symbolRepository.create({ ...createSymbolDto });
    try {
      symbol = await this.symbolRepository.save(symbol);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as any).code === '23505'
      ) {
        throw new BadRequestException('Symbol already exists');
      }
    }
    return symbol;
  }

  /**
   * Updates a symbol. If the symbol does not exist, it throws an error.
   * @returns {Promise<Symbol>} The updated symbol.
   * @param {number} symbolId The ID of the symbol to update.
   * @param {CreateSymbolDto} updateSymbolDto The data to update the symbol.
   * @throws {BadRequestException} If the symbol ID does not exist.
   * @throws {RequestTimeoutException} If the request to the database times out.
   * @ignore This method is not yet used in the routes.
   */
  public async update(
    symbolId: number,
    updateSymbolDto: CreateSymbolDto,
  ): Promise<Symbol> {
    let symbol: Symbol;
    try {
      symbol = await this.symbolRepository.findOne({
        where: { id: symbolId },
      });
    } catch (error) {
      throw new RequestTimeoutException({
        description:
          'The request to the database timed out. Failed to find the symbol.',
        cause: error,
      });
    }
    if (!symbol) {
      throw new BadRequestException('Symbol ID does not exist');
    }
    symbol.symbol = updateSymbolDto.symbol;
    try {
      await this.symbolRepository.save(symbol);
    } catch (error) {
      throw new RequestTimeoutException({
        description: 'Failed to update the symbol',
        cause: error,
      });
    }
    return symbol;
  }

  /**
   * Deletes a symbol by its ID. Using this method will not cascade delete
   * and so will cause issues if the symbol is used.
   * @param {number} symbolId The ID of the symbol to delete.
   * @returns {Promise<void>} An empty promise.
   */
  public async deleteById(symbolId: number): Promise<void> {
    const symbol = await this.symbolRepository.findOne({
      where: { id: symbolId },
    });
    if (!symbol) {
      throw new NotFoundException(`Symbol not found for ID: ${symbolId}`);
    }
    await this.symbolRepository.remove(symbol);
  }

  /**
   * Deletes a symbol by its symbol.
   * @param {string} symbol The symbol to delete.
   * @returns {Promise<void>} An empty promise.
   * @ignore This method is not yet used in the routes.
   */
  public async deleteBySymbol(symbol: string): Promise<void> {
    await this.symbolRepository.delete({ symbol: symbol });
  }

  /**
   * Finds a symbol by its ID or symbol.
   * @param {number | string} query The ID or symbol to find.
   * @returns {Promise<Symbol>} The found symbol.
   */
  public async findSymbol(query: number | string): Promise<Symbol> {
    let symbol: Symbol;
    if (typeof query === 'number') {
      symbol = await this.symbolRepository.findOne({
        where: { id: query },
      });
    } else {
      symbol = await this.symbolRepository.findOne({
        where: { symbol: query },
      });
    }
    if (!symbol) {
      throw new NotFoundException(`Symbol not found for query: ${query}`);
    }
    return symbol;
  }
}
