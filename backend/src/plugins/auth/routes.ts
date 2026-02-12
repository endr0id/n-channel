import type { FastifyInstance } from "fastify";
import { loginRequestSchema } from "./schemas";
import { loginHandler } from "./handlers";

export async function authRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.post("/auth/login", {
    schema: {
      body: loginRequestSchema,
    },
    handler: loginHandler,
  });
}
