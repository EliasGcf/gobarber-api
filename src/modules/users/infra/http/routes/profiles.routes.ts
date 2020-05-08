import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profilesRouter = Router();
const profileController = new ProfileController();

profilesRouter.use(ensureAuthenticated);

profilesRouter.put('/', profileController.update);
profilesRouter.get('/', profileController.show);

export default profilesRouter;
