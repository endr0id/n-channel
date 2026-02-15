import { createUser, findUserByEmail } from "./repositories";
import type { CreateUserInput, UserResponse } from "./schemas";

export type CreateUserResult =
  | { success: true; user: UserResponse }
  | { success: false; error: string };

export async function registerUser(
  input: CreateUserInput,
): Promise<CreateUserResult> {
  const existingUser = await findUserByEmail(input.email);

  if (existingUser) {
    return {
      success: false,
      error: "Email already exists",
    };
  }

  const user = await createUser(input);

  return {
    success: true,
    user,
  };
}
