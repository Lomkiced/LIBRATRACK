import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit during Next.js hot reloads.
// Learn more: https://pris.ly/d/help/next-js-best-practices
//
// NOTE (Prisma 7): Requires a driver adapter — connection URL is NOT read
// from schema.prisma anymore. Ensure DATABASE_URL is set in .env.local.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
