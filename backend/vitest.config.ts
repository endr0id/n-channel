import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    env: {
      PORT: '3001',
      HOST: '0.0.0.0',
      NODE_ENV: 'test',
      CORS_ORIGIN: 'http://localhost:5173',
      LOG_LEVEL: 'error', // NOTE: test時はログ抑制
    },
  },
});
