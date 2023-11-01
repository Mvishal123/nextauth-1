import { z } from "zod";

export const ValidateSignin = z
  .object({
    username: z.coerce.string({ required_error: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    // email : z.string(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });
