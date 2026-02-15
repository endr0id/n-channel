import * as fs from "node:fs";
import * as path from "node:path";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import * as yaml from "yaml";
import * as z from "zod";
import { generateOpenApiDocument } from "./generator";
import { buildRegistry } from "./registry";

extendZodWithOpenApi(z);

const registry = buildRegistry();
const openApiDoc = generateOpenApiDocument(registry);

const outputPath = path.resolve(
  new URL(import.meta.url).pathname,
  "../../../../../openapi/openapi.yml",
);

fs.writeFileSync(outputPath, yaml.stringify(openApiDoc));
console.log(`✅ Successfully output openapi.yml: ${outputPath}`);
