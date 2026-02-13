import fp from "fastify-plugin";
import type { FastifyPluginAsync } from "fastify";
import { authRoutes } from "./routes";

const authPlugin: FastifyPluginAsync = async (fastify) => {
  await fastify.register(authRoutes);

  // TODO: 機能追加予定
  // JWT検証用デコレータ
  // 認証ミドルウェア
  // セッション管理
};

// NOTE: プラグインのスコープ管理を適切にする為にfastify-pluginでラップしてexport
export default fp(authPlugin, {
  name: "auth-plugin",
  // dependencies: ['@fastify/jwt'] // 依存プラグインはここに記述
});
