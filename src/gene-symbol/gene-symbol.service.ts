import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneService } from 'src/gene/gene.service';
import { SymbolService } from 'src/symbol/symbol.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { GeneSymbol } from './gene-symbol.entity';
import { ActiveUserInterface } from 'src/auth/interface/active-user.interface';
import { CreateGeneSymbolDto } from './dto/create/create-gene-symbol.dto';

@Injectable()
export class GeneSymbolService {
    constructor(
        private readonly userService: UserService,
        private readonly geneService: GeneService,
        private readonly symbolService: SymbolService,
        @InjectRepository(GeneSymbol)
        private readonly geneSymbolRepository: Repository<GeneSymbol>,
    ) {}

    public async create(
        createGeneSymbolDto: CreateGeneSymbolDto,
        user: ActiveUserInterface,
    ): Promise<GeneSymbol> {
        let author = undefined;
        let gene = undefined;
        let symbol = undefined;
        try {
            author = await this.userService.findById(user.sub);
            gene = await this.geneService.getById(createGeneSymbolDto.gene);
            symbol = await this.symbolService.findSymbol(
                createGeneSymbolDto.symbol,
            );
        } catch (error) {
            throw new ConflictException(error);
        }
        const geneSymbol = this.geneSymbolRepository.create({
            type: createGeneSymbolDto.type,
            status: createGeneSymbolDto.status,
            creator: author,
            gene: gene,
            symbol: symbol,
        });
        try {
            return await this.geneSymbolRepository.save(geneSymbol);
        } catch (error) {
            throw new ConflictException(error, {
                description:
                    'Gene symbol creation failed. Make sure the symbol is unique',
            });
        }
    }
}
