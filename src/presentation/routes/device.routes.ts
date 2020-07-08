import { Router } from 'express';

import { deviceController } from '../controllers';

const router = Router();

export function deviceRouter() {
	// POST /api/devices/create
	router.post('/create', deviceController.createDevice);

	// GET /api/devices/all
	router.get('/all', deviceController.getAllDevices);

	console.info('🔀 Devices Routes 🔀');
	return router;
}
