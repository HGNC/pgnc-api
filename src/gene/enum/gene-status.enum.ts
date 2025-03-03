/**
 * Enum for gene status
 */
export enum geneStatus {
    /**
     * Internal status - not visible to the public
     */
    INTERNAL = 'internal',
    /**
     * Approved status - visible to the public
     */
    APPROVED = 'approved',
    /**
     * Withdrawn status - visible to the public but is soft deleted
     */
    WITHDRAWN = 'withdrawn',
    /**
     * Review status - visible to the public but is under review
     * and may be subject to change
     */
    REVIEW = 'review',
    /**
     * Merged status - visible to the public but is merged with another gene
     */
    MERGED = 'merged',
    /**
     * Split status - visible to the public but is split into multiple genes
     */
    SPLIT = 'split',
}
