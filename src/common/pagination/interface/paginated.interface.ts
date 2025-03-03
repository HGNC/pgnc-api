/**
 * Interface for paginated data response.
 */
export interface Paginated<T> {
    /**
     * The data.
     * @type {T[]}
     */
    data: T[];
    /**
     * The meta information.
     * @property {number} itemsPerPage  The number of items per page.
     * @property {number} totalItems  The total number of items.
     * @property {number} currentPage  The current page.
     * @property {number} totalPages  The total number of pages.
     */
    meta: {
        itemsPerPage: number;
        totalItems: number;
        currentPage: number;
        totalPages: number;
    };
    /**
     * The links.
     * @property {string} first  The first page.
     * @property {string} previous  The previous page.
     * @property {string} next  The next page.
     * @property {string} last  The last page.
     * @property {string} current  The current page.
     */
    links: {
        first: string;
        previous: string;
        next: string;
        last: string;
        current: string;
    };
}
