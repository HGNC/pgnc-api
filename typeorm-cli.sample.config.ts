// Copy this file, name it typeorm-cli.config.ts and
// update the values to match your database configuration.
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'pgnc',
  entities: ['**/*.entity.js'],
  migrations: ['migrations/*.js'],
});
