import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { usersPaths } from "./paths/users";

export function buildRegistry(): OpenAPIRegistry {
  const registry = new OpenAPIRegistry();

  // NOTE: Add each endpoint
  usersPaths(registry);

  return registry;
}
