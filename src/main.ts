import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function registerGlobals(app: INestApplication) {
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      // strategy: 'excludeAll',
      // excludeExtraneousValues: true,
    }),
  );
}

/**
 * Bootstrap the application. This is the entry point of the application.
 * It creates the NestJS application and listens on the specified port.
 * It also sets up global pipes and Swagger documentation.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global interceptors
  registerGlobals(app);

  const config = new DocumentBuilder()
    .setVersion('0.0.1')
    .setTitle('PGNC API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms')
    .setLicense(
      'AGPLv3.0 License',
      'https://www.gnu.org/licenses/agpl-3.0.en.html',
    )
    .addServer('http://localhost:3000')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
