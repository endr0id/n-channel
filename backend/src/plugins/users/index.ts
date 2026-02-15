import { type FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import { usersRoutes } from "./routes";

const usersPlugin: FastifyPluginAsync = async (fastify) => {
  await fastify.register(usersRoutes, { prefix: "/users" });
};

export default fp(usersPlugin, {
  name: "users-plugin",
});
