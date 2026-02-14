import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as z from "zod";
import { usersTable } from "./schema";

const userEntitySchema = createSelectSchema(usersTable);

export const userResponseSchema = userEntitySchema.omit({
  passwordHash: true,
});

export const createUserSchema = createInsertSchema(usersTable)
  .omit({
    passwordHash: true,
  })
  .extend({
    email: z.email(),
    password: z.string().min(12).max(255),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export type UserResponse = z.infer<typeof userResponseSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
