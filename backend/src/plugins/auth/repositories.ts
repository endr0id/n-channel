import type { components } from "@n-channel/api-types";
import { compare } from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../../db/";
import { usersTable } from "../../db/schema/users";

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
  const result = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
      passwordHash: usersTable.passwordHash,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  const user = result[0];
  if (!user) return null;

  const isValid = await compare(password, user.passwordHash);
  if (!isValid) return null;

  return {
    id: user.id,
    name: user.name,
  };
}

/**
 * メールアドレスでユーザーを検索
 *  @param email メールアドレス
 *  @returns ユーザー情報 or null
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  const result = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  return result[0] ?? null;
}
