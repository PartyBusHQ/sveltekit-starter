import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';
const prisma = global.prisma || new PrismaClient();

if (dev === true) global.prisma = prisma;

export { prisma };
