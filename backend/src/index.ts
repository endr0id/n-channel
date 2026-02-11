import { buildServer } from "./server";
import { env } from "./config/env"

const fastify = buildServer();

fastify.listen({
  port: env.port,
  host: env.host,
}, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server listening on ${address}`);
});

// NOTE: Graceful Shutdown
const signals = ['SIGINT', 'SIGTERM'] as const;

for (const signal of signals) {
  process.on(signal, async () => {
    fastify.log.info(`Received ${signal}, closing server gracefully`);
    await fastify.close();
    process.exit(0);
  });
}
