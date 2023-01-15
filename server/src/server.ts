import { routes } from './routes'
import cors from '@fastify/cors';

async function bootsrap() {
  
  await routes.register(cors, {
    origin: true,
  });
  
  await routes.listen({ port: 3000, host: '0.0.0.0' });
}

bootsrap()