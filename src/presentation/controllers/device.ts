import { Request, Response } from 'express';
import { Responses } from '../../utils';

import {
	createDeviceRepository,
	getAllDevicesRepository,
} from '../../data/repositories';

const responses = new Responses();

export const deviceController = {
	createDevice: async (req: Request, res: Response) => {
		console.info('Create Device Controller');

		try {
			const savedDevice = await createDeviceRepository(req.body);

			return responses.success(res, savedDevice);
		} catch (err) {
			return responses.error(res, 'Error to create device', {}, err);
		}
	},
	getAllDevices: async (req: Request, res: Response) => {
		console.info('GET All Devices Controller');

		try {
			const devices = await getAllDevicesRepository();

			return responses.success(res, devices);
		} catch (err) {
			return responses.error(res, 'Error in return all Devices', {}, err);
		}
	},
};
