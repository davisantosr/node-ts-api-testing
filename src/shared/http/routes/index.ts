import { Router } from 'express';
// import sessionsRouter from '@modules/users/routes/sessions.routes';
import usersRouter from '@modules/users/routes/users.routes';
import addressesRouter from '@modules/addresses/routes/addresses.routes';
// import profileRouter from '@modules/users/routes/profile.routes';
// import customersRouter from '@modules/customers/routes/customers.routes';
// import ordersRouter from '@modules/orders/routes/orders.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/addresses', addressesRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/profile', profileRouter);
// routes.use('/customers', customersRouter);
// routes.use('/orders', ordersRouter);

export default routes;
