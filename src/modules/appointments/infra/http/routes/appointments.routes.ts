import { Router } from 'express';

import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';

import ensureAuthenticade from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticade);

appointmentsRouter.post('/', appointmentsController.craete);

export default appointmentsRouter;
