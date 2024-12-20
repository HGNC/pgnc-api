import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bcrypt from 'bcrypt';

/**
 * Bcrypt hashing provider.
 * @export  BcryptProvider  Bcrypt hashing provider.
 * @implements {HashingProvider}
 */
@Injectable()
export class BcryptProvider implements HashingProvider {
  /**
   * Hashes the provided data. The data can be a string or a buffer.
   * @param {(string | Buffer)} data The data to hash.
   * @returns {Promise<string>} The hashed data.
   */
  public async hashPassword(data: string | Buffer): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data.toString(), salt);
  }

  /**
   * Compares the provided data with the encrypted data.
   * @param {(string | Buffer)} data The data to compare.
   * @param {string} encrypted The encrypted data to compare against.
   * @returns {Promise<boolean>} A promise that resolves to true if the data matches the encrypted data, false otherwise.
   */
  public async comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean> {
    return bcrypt.compare(data.toString(), encrypted);
  }
}
