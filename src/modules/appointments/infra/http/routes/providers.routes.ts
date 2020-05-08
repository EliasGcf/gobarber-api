import { Router } from 'express';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';

import ensureAuthenticade from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticade);

providersRouter.get('/', providersController.index);

export default providersRouter;
