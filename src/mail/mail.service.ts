import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';

/**
 * Service to send email to users.
 */
@Injectable()
export class MailService {
  /**
   * Constructor to inject mailer service.
   * @param mailerService Mailer service to send email.
   */
  constructor(private mailerService: MailerService) {}

  /**
   * Send welcome email to user.
   * @param user User to send welcome email.
   */
  public async sendUserWelcome(user: User): Promise<void> {
    await this.mailerService.sendMail({
      to: user.email,
      from: `Onboarding team <support@nestjs-blog.com>`,
      subject: 'Welcome to NestJS Blog!',
      template: './welcome',
      context: {
        name: user.firstName,
        email: user.email,
        loginUrl: 'http://localhost:3000/login',
      },
    });
  }
}
