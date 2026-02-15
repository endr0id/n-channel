import type { FastifyInstance } from "fastify";
import { createUserHandler } from "./handlers";
import { createUserSchema } from "./schemas";

export async function usersRoutes(fastify: FastifyInstance): Promise<void> {
  // NOTE: index.tsのprefixでパス付与される
  fastify.post("/", {
    schema: {
      body: createUserSchema,
    },
    handler: createUserHandler,
  });
}
