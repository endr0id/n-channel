import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateUserInput, UserResponse } from "./schemas";
import { registerUser } from "./services";

type CreateUserSuccessResponse = {
  user: UserResponse;
};

type CreateUserErrorResponse = {
  error: string;
};

export async function createUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
    Reply: CreateUserSuccessResponse | CreateUserErrorResponse;
  }>,
  reply: FastifyReply,
): Promise<void> {
  const result = await registerUser(request.body);

  if (!result.success) {
    const errorResponse = {
      error: result.error,
    };
    return reply.code(409).send(errorResponse);
  }

  const successResponse = { user: result.user };

  return reply.code(201).send(successResponse);
}
