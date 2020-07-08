import { Device, iDevice } from '../models';

/**
 * createDeviceRepository
 *
 * @param {iDevice} data
 *
 * Create and save a new Device in database
 */
export async function createDeviceRepository(data: iDevice) {
	return await Device.create(data);
}

/**
 * getAllDevicesRepository
 *
 * Return all devices stored in database
 */
export async function getAllDevicesRepository() {
	return await Device.find({}).lean();
}
