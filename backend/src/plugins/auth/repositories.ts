import type { components } from "@n-channel/api-types";

export type User = components["schemas"]["UserResponse"];

/**
 * 認証情報の検証
 * @param email メールアドレス
 * @param password パスワード
 * @returns 認証成功時はユーザー情報 / 失敗時はnull
 */
export async function verifyCredentials(
  email: string,
  password: string,
): Promise<User | null> {
  // TODO: DB構築したら置き換える
  if (email === "test@example.com" && password === "password1234") {
    return { id: 1, name: "test_user" };
  }

  return null;
}

/**
 * メールアドレスでユーザーを検索
 *  @param email メールアドレス
 *  @returns ユーザー情報 or null
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  // TODO: DB構築したら置き換える
  if (email === "test@example.com") {
    return { id: 1, name: "test_user" };
  }

  return null;
}
