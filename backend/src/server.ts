import Fastify from 'fastify';
import cors from '@fastify/cors';
import { env } from './config/env';
import authPlugin from './plugins/auth';

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

  fastify.register(authPlugin);

  return fastify;
}
