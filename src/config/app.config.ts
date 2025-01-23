import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => {
  console.log('ENV:', process.env);
  return {
    environment: process.env.NODE_ENV || 'production',
    apiVersion: process.env.API_VERSION,
    mailHost: process.env.MAIL_HOST,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
  };
});
