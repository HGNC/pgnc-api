import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'prod', 'test', 'stage').default('dev'),
  DB_PORT: Joi.number().default(5432),
  DB_HOST: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SYNC: Joi.boolean().required(),
  DB_AUTOLOAD_ENTITIES: Joi.boolean().required(),
  PROFILE_API_KEY: Joi.string().required(),

  // JWT
  JWT_SECRET: Joi.string().required(),
  JWT_TOKEN_AUDIENCE: Joi.string().required(),
  JWT_TOKEN_ISSUER: Joi.string().required(),
  JWT_ACCESS_TOKEN_TTL: Joi.number().required(),
  // JWT REFRESH TOKEN
  JWT_REFRESH_TOKEN_TTL: Joi.number().required(),
  //   API_VERSION: Joi.string().required(),
  // MailTrap
  MAIL_HOST: Joi.string().required(),
  SMTP_USERNAME: Joi.string().required(),
  SMTP_PASSWORD: Joi.string().required(),
});
