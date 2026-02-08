import type { FastifyRequest, FastifyReply } from "fastify";
import type { paths } from '@n-channel/api-types';
import { login } from './services';

type LoginRequestBody = paths['/auth/login']['post']['requestBody']['content']['application/json'];
type LoginSuccessResponse = paths['/auth/login']['post']['responses'][200]['content']['application/json'];
type LoginErrorResponse = paths['/auth/login']['post']['responses'][401]['content']['application/json'];

export async function loginHandler(
  request: FastifyRequest<{ Body: LoginRequestBody }>,
  reply: FastifyReply
): Promise<void> {
  const { email, password } = request.body;

  const result = await login(email, password);

  if (!result.success) {
    return reply.code(401).send({
      error: result.error
    } as LoginErrorResponse);
  }

  return reply.code(200).send({
    token: result.token,
    user: result.user
  } as LoginSuccessResponse);
}
