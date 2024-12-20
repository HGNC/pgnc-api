import { registerAs } from '@nestjs/config';

/**
 * Profile configuration object. Stores the API key for the Profile API.
 */
export default registerAs('profileConfig', () => ({
  apiKey: process.env.PROFILE_API_KEY,
}));
