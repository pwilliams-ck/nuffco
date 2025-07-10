import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z
    .string()
    .min(3, "Must be 3 or more charracters")
    .max(63, "Must be less than 63 characters")
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "The username field may only contain lowercase letters, numbers, and hyphens, it must start and end with only letters and numbers",
    )
    .refine(
      (val) => !val.includes("--"),
      "Username can not contain consecutive hyphens",
    )
    .transform((val) => val.toLowerCase()),
});
