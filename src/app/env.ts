import { z } from "zod";

function resolveBaseUrl(): string {
  const explicit =
    process.env.APP_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

  if (explicit) {
    return explicit;
  }

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (vercelHost) {
    return vercelHost.startsWith("http")
      ? vercelHost
      : `https://${vercelHost}`;
  }

  return "http://localhost:3000";
}

const baseUrl = resolveBaseUrl();

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? baseUrl,
  APP_URL: process.env.APP_URL ?? baseUrl,
});

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors,
  );

  throw new Error("Invalid environment variables.");
}

export const env = parsedEnv.data;
