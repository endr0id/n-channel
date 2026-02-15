import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../../../.env") });

type NodeEnv = "development" | "production" | "test";
type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

interface EnvConfig {
  port: number;
  host: string;
  nodeEnv: NodeEnv;
  corsOrigin: string;
  logLevel: LogLevel;
  databaseUrl: string;
}

function assertEnvDefine(key: string): string {
  const value = process.env[key];
  if (value === undefined || value === "") {
    throw new Error(`Environment variable is required but not set`);
  }
  return value;
}

function getEnvConfig(): EnvConfig {
  const portStr = assertEnvDefine("PORT");
  const port = parseInt(portStr, 10);
  if (Number.isNaN(port)) {
    throw new Error(`PORT must be a number, got: ${portStr}`);
  }

  const nodeEnv = assertEnvDefine("NODE_ENV");
  const logLevel = assertEnvDefine("LOG_LEVEL");

  return {
    port,
    host: assertEnvDefine("HOST"),
    nodeEnv: nodeEnv as NodeEnv,
    corsOrigin: assertEnvDefine("CORS_ORIGIN"),
    logLevel: logLevel as LogLevel,
    databaseUrl: assertEnvDefine("DATABASE_URL"),
  };
}

export const env = getEnvConfig();
