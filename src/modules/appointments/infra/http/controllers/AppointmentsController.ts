import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async craete(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { provider_id, date } = req.body;

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      provider_id,
      date,
      user_id,
    });

    return res.json(appointment);
  }
}
