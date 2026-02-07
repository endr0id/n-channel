import { FastifyInstance } from "fastify";
import type { paths } from "@n-channel/api-types";

// 型エイリアスを定義
type LoginRequest = paths["/auth/login"]["post"]["requestBody"]["content"]["application/json"];
type LoginResponse = paths["/auth/login"]["post"]["responses"][200]["content"]["application/json"];
type ErrorResponse = paths["/auth/login"]["post"]["responses"][401]["content"]["application/json"];


/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify: FastifyInstance, options: Object) {
  fastify.post<{
    Body: LoginRequest;
    Reply: LoginResponse | ErrorResponse;
  }>(
    "/auth/login",
    async (req, res) => {
      const { email, password } = req.body;

      if (email === "test@example.com" && password === "password123") {
        return res.code(200).send({
          token: "dummy-token",
          user: {
            id: 1,
            name: "test_user"
          }
        });
      }

      return res.code(401).send({
        error: "Invalid credentials"
      });
    }
  )
}

export default routes;
