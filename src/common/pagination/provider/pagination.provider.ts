import { Injectable, Inject } from '@nestjs/common';
import { PaginationDto } from '../dto/pagination.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Paginated } from '../interface/paginated.interface';

/**
 * PaginationProvider is a provider that is responsible for paginating query results.
 */
@Injectable()
export class PaginationProvider {
  /**
   * PaginationProvider constructor.
   * @param {Request} request  The request object.
   * @param {PaginationDto} paginationQuery  The pagination query DTO.
   * @param {Repository<T>} repository  The repository to paginate.
   */
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  /**
   * the paginateQuery method paginates the query results.
   * @param paginationQuery The pagination query DTO.
   * @param repository The repository to paginate.
   * @returns {Promise<Paginated<T>>}  A promise that resolves to a paginated object.
   */
  public async paginateQuery<T extends ObjectLiteral>(
    paginationQuery: PaginationDto,
    repository: Repository<T>,
  ): Promise<Paginated<T>> {
    const results = await repository.find({
      skip:
        paginationQuery.page * paginationQuery.limit - paginationQuery.limit,
      take: paginationQuery.limit,
    });
    const baseURL = `${this.request.protocol}://${this.request.headers.host}/`;
    const newURL = new URL(this.request.url, baseURL);
    const totalItems = await repository.count();
    const totalPages = Math.ceil(totalItems / paginationQuery.limit);
    const nextPage =
      paginationQuery.page === totalPages
        ? paginationQuery.page
        : paginationQuery.page + 1;
    const previousPage =
      paginationQuery.page === 1
        ? paginationQuery.page
        : paginationQuery.page - 1;

    const finalResponse: Paginated<T> = {
      data: results,
      meta: {
        itemsPerPage: paginationQuery.limit,
        totalItems: totalItems,
        currentPage: paginationQuery.page,
        totalPages: totalPages,
      },
      links: {
        first: `${newURL.origin}${newURL.pathname}?page=1&limit=${paginationQuery.limit}`,
        last: `${newURL.origin}${newURL.pathname}?page=${totalPages}&limit=${paginationQuery.limit}`,
        current: `${newURL.origin}${newURL.pathname}?page=${paginationQuery.page}&limit=${paginationQuery.limit}`,
        previous: `${newURL.origin}${newURL.pathname}?page=${previousPage}&limit=${paginationQuery.limit}`,
        next: `${newURL.origin}${newURL.pathname}?page=${nextPage}&limit=${paginationQuery.limit}`,
      },
    };
    return finalResponse;
  }
}
