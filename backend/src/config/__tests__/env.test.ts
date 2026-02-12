import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

describe("env config", () => {
  const originalEnv = process.env;
  const configPath = "../../config/env.ts";

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  function setupTestEnv(overrides: Record<string, string> = {}) {
    const testEnv = {
<<<<<<< HEAD
      PORT: "3001",
      HOST: "0.0.0.0",
      NODE_ENV: "development",
      CORS_ORIGIN: "http://localhost:5173",
      LOG_LEVEL: "info",
=======
      PORT: '3001',
      HOST: '0.0.0.0',
      NODE_ENV: 'development',
      CORS_ORIGIN: 'http://localhost:5173',
      LOG_LEVEL: 'info',
      DATABASE_URL: 'postgresql://local_user:password@localhost:5432/n-channel',
>>>>>>> 8aa3be8 (test: 環境変数のテストケースを追加(#26))
      ...overrides,
    };

    process.env = { ...testEnv };
  }

  it("環境変数を正常に読み込む", async () => {
    setupTestEnv();

    const { env } = await import(configPath);

    expect(env.port).toBe(3001);
    expect(env.host).toBe('0.0.0.0');
    expect(env.nodeEnv).toBe('development');
    expect(env.corsOrigin).toBe('http://localhost:5173');
    expect(env.logLevel).toBe('info');
    expect(env.databaseUrl).toBe('postgresql://local_user:password@localhost:5432/n-channel');
  });

  it("環境変数(PORT)が見つからない場合、throwする", async () => {
    setupTestEnv({ PORT: "" });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow("Environment variable PORT is required but not set");
  });

  it("環境変数(PORT)が数値でない場合、throwする", async () => {
    setupTestEnv({ PORT: "invalid" });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow("PORT must be a number, got: invalid");
  });

  it("環境変数(HOST)が見つからない場合、throwする", async () => {
    setupTestEnv({ HOST: "" });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow("Environment variable HOST is required but not set");
  });

  it("環境変数(NODE_ENV)が見つからない場合、throwする", async () => {
    setupTestEnv({ NODE_ENV: "" });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow("Environment variable NODE_ENV is required but not set");
  });

  it("環境変数(CORS_ORIGIN)が見つからない場合、throwする", async () => {
    setupTestEnv({ CORS_ORIGIN: "" });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow(
      "Environment variable CORS_ORIGIN is required but not set",
    );
  });

  it("環境変数(LOG_LEVEL)が見つからない場合、throwする", async () => {
    setupTestEnv({ LOG_LEVEL: "" });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow(
      "Environment variable LOG_LEVEL is required but not set",
    );
  });

  it('環境変数(DATABASE_URL)が見つからない場合、throwする', async () => {
    setupTestEnv({ DATABASE_URL: '' });

    await expect(async () => {
      await import(configPath);
    }).rejects.toThrow('Environment variable DATABASE_URL is required but not set');
  });
});
