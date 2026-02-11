import { login } from './services';
import { LoginRequestBody, LoginSuccessResponse, loginFailedResponse, } from './schemas'
import type { FastifyRequest, FastifyReply, } from "fastify";

export async function loginHandler(
  request: FastifyRequest<{ Body: LoginRequestBody, Reply: LoginSuccessResponse | loginFailedResponse }>,
  reply: FastifyReply
): Promise<void> {
  const { email, password } = request.body;

  const result = await login(email, password);

  if (!result.success) {
    return reply.code(401).send({
      error: result.error
    });
  }

  return reply.code(200).send({
    token: result.token,
    user: result.user
  });
}
