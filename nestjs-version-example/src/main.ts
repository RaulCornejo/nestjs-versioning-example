import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable nestjs versioning
  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'route-version',
    defaultVersion: [VERSION_NEUTRAL],
  });

  await app.listen(3000);
}
bootstrap();
