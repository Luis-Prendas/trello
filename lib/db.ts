import { PrismaClient } from '@prisma/client'

declare global {
  let prisma: PrismaClient | undefined
};
// @ts-expect-error
export const db = globalThis.prisma || new PrismaClient()
// @ts-expect-error
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
