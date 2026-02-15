import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import * as z from "zod";
import {
  createUserSchema,
  userResponseSchema,
} from "../../../plugins/users/schemas";

export function usersPaths(registry: OpenAPIRegistry): void {
  registry.registerPath({
    method: "post",
    path: "/users",
    summary: "User Register",
    tags: ["Users"],
    request: {
      body: {
        content: {
          "application/json": {
            schema: createUserSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Created",
        content: {
          "application/json": {
            schema: z.object({
              user: userResponseSchema,
            }),
          },
        },
      },
      400: {
        description: "Bad Request",
        content: {
          "application/json": {
            schema: z
              .object({
                error: z.string(),
              })
              .openapi("BadRequestError"),
          },
        },
      },
      409: {
        description: "Conflict",
        content: {
          "application/json": {
            schema: z
              .object({
                error: z.string(),
              })
              .openapi("ConflictError"),
          },
        },
      },
    },
  });
}
