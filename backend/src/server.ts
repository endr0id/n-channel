import cors from "@fastify/cors";
import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./config/env";
import plugins from "./plugins";

export function buildServer() {
  const fastify = Fastify({
    logger: {
      level: env.logLevel,
    },
  }).withTypeProvider<ZodTypeProvider>();

  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  fastify.register(cors, {
    origin: env.corsOrigin,
    credentials: true,
  });
  fastify.register(plugins);

  return fastify;
}
