/**
 * Enum for nomenclature type - used within Name and Symbol
 */
export enum nomenclatureType {
  /**
   * Approved by the PGNC
   */
  APPROVED = 'approved',
  /**
   * Alias symbol or name - not approved by the PGNC
   */
  ALIAS = 'alias',
  /**
   * Previous symbol or name - a previously approved
   * nomenclature that has been replaced
   */
  PREVIOUS = 'previous',
}
