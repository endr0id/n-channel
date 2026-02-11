import Fastify from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider
} from 'fastify-type-provider-zod';
import cors from '@fastify/cors';
import { env } from './config/env';
import authPlugin from './plugins/auth';

export function buildServer() {
  const fastify = Fastify({
    logger: {
      level: env.logLevel,
    }
  }).withTypeProvider<ZodTypeProvider>();

  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  fastify.register(cors, {
    origin: env.corsOrigin,
    credentials: true,
  });

  fastify.register(authPlugin);

  return fastify;
}
