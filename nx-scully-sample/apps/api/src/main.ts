import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app/app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';

const server = express();

async function bootstrap(instance) {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(instance));
  app.setGlobalPrefix('v1');
  return app.init();
}

bootstrap(server)
  .then(v => Logger.log(`Ready`))
  .catch(e => Logger.warn(e));
export const api = functions.https.onRequest(server);