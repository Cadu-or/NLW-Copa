import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

export const routes = Fastify({
  logger: true,
});


const prisma = new PrismaClient({
  log: ['query'],
})

routes.get('/pools/count', async () => {
  const count = await prisma.pool.count()
  
  return { count };
});
