import type { FastifyInstance } from "fastify";
import { loginHandler } from "./handlers";

export async function authRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.post('/auth/login', loginHandler);
}
