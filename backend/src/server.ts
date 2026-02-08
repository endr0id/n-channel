import Fastify from 'fastify';
import cors from '@fastify/cors';
import { env } from './config/env';
import Routes from './routes';

export function buildServer() {
  const fastify = Fastify({
    logger: {
      level: env.logLevel,
    }
  });

  fastify.register(cors, {
    origin: env.corsOrigin,
    credentials: true,
  });

  fastify.register(Routes);

  return fastify;
}
