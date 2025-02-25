import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => {
  return {
    environment: process.env.NODE_ENV || 'production',
    apiVersion: '0.1',
    mailHost: process.env.MAIL_HOST,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
  };
});
