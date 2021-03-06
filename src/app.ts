import 'reflect-metadata'; // this shim is required
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import authCheck from '@services/auth.service';

// required by routing-controllers
useContainer(Container);

const app = createExpressServer({
  routePrefix: '/api/v1',
  cors: true,
  authorizationChecker: authCheck,
  controllers: [__dirname + '/controllers/*.ts'],
  middlewares: [__dirname + '/middlewares/*.ts'],
  interceptors: [__dirname + '/interceptors/*.ts']
});

export default app;
