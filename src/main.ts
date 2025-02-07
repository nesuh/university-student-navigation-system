import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './shared/exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  // app.enableCors() =true
  const config = new DocumentBuilder()
    .setTitle('DMU Navigation System API')
    .setDescription('DMU Navigation System API')
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
