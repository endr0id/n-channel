import { describe, it, expect, afterEach } from 'vitest';
import { buildServer } from '../server';
import type { FastifyInstance } from 'fastify';

describe('buildServer', () => {
  let server: FastifyInstance | null = null;

  afterEach(async () => {
    if (server) {
      await server.close();
      server = null;
    }
  });

  it('fastifyインスタンスが構築される', () => {
    server = buildServer();
    expect(server).toBeDefined();
  });

  it('loggerが設定されている', () => {
    server = buildServer();
    expect(server.log).toBeDefined();
  });

  it('ルートが設定されている', async () => {
    server = buildServer();
    await server.ready();

    const routes = server.printRoutes();
    expect(routes).toContain('auth/login');
  });

  it('CORSが登録されている', async () => {
    server = buildServer();
    await server.ready();

    // NOTE: CORS は Fastify のコア機能ではなくプラグイン提供のため、プラグイン有無を含めた検証をする
    expect(server.hasPlugin('@fastify/cors')).toBe(true);
  });
});
