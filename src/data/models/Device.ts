import { Schema, model, Document } from 'mongoose';

const DeviceSchema = new Schema({
	deviceId: {
		type: 'String',
		required: true,
	},
	platform: {
		type: 'String',
		required: true,
	},
	name: {
		type: 'String',
		required: false,
	},
});

export interface iDevice extends Document {
	deviceId: String;
	platform: String;
	name?: String;
}

export const Device = model<iDevice>('Device', DeviceSchema);
