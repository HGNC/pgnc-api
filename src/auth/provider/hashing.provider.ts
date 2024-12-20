import { Injectable } from '@nestjs/common';

/**
 * HashingProvider is an abstract class that is to be extended by classes
 * that will act like a hash provider.
 * @export abstract HashingProvider
 * @method {comparePassword}  Compares the provided data with the encrypted data.
 * @method {hashPassword}  Hashes the provided data.
 *
 */
@Injectable()
export abstract class HashingProvider {
  /**
   * Hashes the provided data. The data can be a string or a buffer.
   * @param {(string | Buffer)} data  The data to hash.
   * @returns {Promise<string>}  The hashed data.
   * @abstract
   */
  abstract hashPassword(data: string | Buffer): Promise<string>;
  /**
   * Compares the provided data with the encrypted data.
   * @param {(string | Buffer)} data  The data to compare.
   * @param {string} encrypted  The encrypted data to compare against.
   * @returns {Promise<boolean>}  A promise that resolves to true if the data matches the encrypted data, false otherwise.
   * @abstract
   */
  abstract comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean>;
}
