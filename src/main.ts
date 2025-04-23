// api/index.ts
import createServer from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  app.listen(process.env.PORT ||5000)
  return createServer(expressApp);
}

export const handler = async (event, context) => {
  server = server ?? (await bootstrap());
  return server(event, context);
};
