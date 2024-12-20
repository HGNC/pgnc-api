import { Module } from '@nestjs/common';
import { PaginationProvider } from './provider/pagination.provider';

/**
 * PaginationModule is a module that imports the PaginationProvider.
 */
@Module({
  providers: [PaginationProvider],
  exports: [PaginationProvider],
})
export class PaginationModule {}
