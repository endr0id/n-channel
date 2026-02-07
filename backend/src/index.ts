import Fastify from "fastify";
import cors from "@fastify/cors"
import Routes from "./routes"

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: "http://localhost:5173",
  credentials: true,
});

fastify.register(Routes);

fastify.listen({ port: 3001, }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(address)
})
