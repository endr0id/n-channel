import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";

export function generateOpenApiDocument(registry: OpenAPIRegistry) {
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: "3.1.0",
    info: {
      title: "N-Channel API",
      version: "0.0.1",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  });
}
