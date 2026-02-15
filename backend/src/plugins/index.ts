import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import authPlugin from "./auth/";
import usersPlugin from "./users/";

const plugins: FastifyPluginAsync = async (fastify) => {
  await fastify.register(authPlugin);
  await fastify.register(usersPlugin);
};

export default fp(plugins, { name: "plugins" });
