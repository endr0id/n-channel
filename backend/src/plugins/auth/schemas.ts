import * as z from "zod";

export const loginRequestSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(12, "Password must be at least 12 characters"),
});

export type LoginRequestBody = z.infer<typeof loginRequestSchema>;

const loginResponseSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.number(),
    name: z.string(),
  }),
});

export type LoginSuccessResponse = z.infer<typeof loginResponseSchema>;

const loginFailedResponseSchema = z.object({
  error: z.string(),
});

export type loginFailedResponse = z.infer<typeof loginFailedResponseSchema>;
