import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

/**
 * Mail module to send email to users using SMTP server and EJS template engine for email template rendering.
 */
@Global()
@Module({
    imports: [
        MailerModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                transport: {
                    host: config.get('appConfig.mailHost'),
                    secure: false,
                    port: 2525,
                    auth: {
                        user: config.get('appConfig.smtpUsername'),
                        pass: config.get('appConfig.smtpPassword'),
                    },
                },
                default: {
                    from: `My Blog <no-reply@nestjs-blog.com>`,
                },
                template: {
                    dir: join(__dirname, 'template'),
                    adapter: new EjsAdapter({
                        inlineCssEnabled: true,
                    }),
                    options: {
                        strict: false,
                    },
                },
            }),
        }),
    ],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {}
