import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from 'yegara';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  // app.enableCors() =true
  const config = new DocumentBuilder()
    .setTitle('University Navigation System API')
    .setDescription('University Navigation System API')
    .addBearerAuth()
    .setVersion('0.1')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, documentFactory, {
    jsonDocumentUrl: '/swagger/json',
  });

  const port = process.env.PORT ?? 4000;
  await app.listen(port);
  Logger.debug(`${process.env.BASE_URL}:${port}/docs`, 'Swagger Docs');
}
bootstrap();
