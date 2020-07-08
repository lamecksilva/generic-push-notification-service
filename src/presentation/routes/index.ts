import { Application, Request, Response } from 'express';

import { deviceRouter } from './device.routes';

export async function applyRoutes(app: Application) {
	app.get('/', (_: Request, res: Response) => {
		console.info(`Hello from Generic-push-notification-service`);

		return res
			.status(200)
			.json({ message: 'Generic-push-notification-service API ONLINE' });
	});

	app.use('/devices', deviceRouter());

	console.info('🔀 Configured Routes. 🛠');
}
