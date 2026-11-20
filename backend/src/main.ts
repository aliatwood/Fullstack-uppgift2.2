import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// Startar servern
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Tillåter frontend att kommunicera med API:et (CORS)
  app.enableCors();

  // Checkar data som skickas till API:et
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Startar servern på port 3000
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();