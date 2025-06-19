import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { HttpExceptionsFilter } from './shared/exception/all.exception';
import { NatsExceptionFilter } from './shared/exception/nats.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionsFilter(), new NatsExceptionFilter());

  if(!process.env.SECRET_KEY) throw new Error('SECRET_KEY is not defined');
  
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600000,
        secure: process.env.NODE_ENV === 'production',
      },
    }),
  );
  
  const expressApp = app.getHttpAdapter().getInstance()
  expressApp.set('trust proxy', 1)

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser());
  app.enableCors({
    origin: process.env.BASE_URL, // ton front Vite ou React
    credentials: true, // Important pour les cookies !
  });
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}
bootstrap();
