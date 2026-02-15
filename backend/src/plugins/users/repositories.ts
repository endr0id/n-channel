import { hash } from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../../infrastructure/db";
import { usersTable } from "./schema";
import type { CreateUserInput, UserResponse } from "./schemas";

export async function createUser(
  input: CreateUserInput,
): Promise<UserResponse> {
  const passwordHash = await hash(input.password, 10);

  const result = await db
    .insert(usersTable)
    .values({
      name: input.name,
      email: input.email,
      passwordHash,
    })
    .returning({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
    });

  return result[0];
}

export async function findUserByEmail(
  email: string,
): Promise<UserResponse | null> {
  const result = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  return result[0] ?? null;
}
