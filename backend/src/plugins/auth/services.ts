import { verifyCredentials, type User } from "./repositories";

function generateToken(userId: number) {
  return `token-${userId}-${Date.now()}`;
}

export type LoginResult =
  | { success: true; token: string; user: User }
  | { success: false; error: string };

export async function login(
  email: string,
  password: string
): Promise<LoginResult> {
  const user = await verifyCredentials(email, password);

  if (!user) {
    return {
      success: false,
      error: 'Invalid credentials'
    };
  }

  const token = generateToken(user.id!);

  return {
    success: true,
    token,
    user
  }
}
