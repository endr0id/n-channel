import { verifyCredentials, type User } from "./repositories";

function generateToken(userId: number) {
  return `token-${userId}-${Date.now()}`;
}

function validateEmail(email: string): boolean {
  return email.includes('@') && email.length > 3;
}

// ===============================
// Public method
// ===============================

export type LoginResult =
  | { success: true; token: string; user: User }
  | { success: false; error: string };

export async function login(
  email: string,
  password: string
): Promise<LoginResult> {
  if (!validateEmail(email)) {
    return {
      success: false,
      error: 'Invalid email format'
    }
  }

  if (!password || password.length < 8) {
    return {
      success: false,
      error: 'password must be at least 8 characters'
    };
  }

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
