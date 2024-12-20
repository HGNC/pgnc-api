import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs('database', () => ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  name: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT) || 5432,
  synchronize: process.env.DB_SYNC === 'true' ? true : false,
  autoLoadEntities: process.env.DB_AUTOLOAD_ENTITIES === 'true' ? true : false,
  namingStrategy: new SnakeNamingStrategy(),
}));
