import { connect, connection } from 'mongoose';

const { MONGO_URL, DB_NAME } = process.env;

export function connectDB() {
	connect(
		MONGO_URL || 'mongodb://127.0.0.1:27017/generic-push-notification-service',
		{
			dbName: DB_NAME || 'GenericPushNotificationService',
			connectTimeoutMS: 10000,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000,
			useNewUrlParser: true,
			keepAlive: true,
			poolSize: 10,
			useFindAndModify: false,
		}
	);
}

connection.on('connected', () => {
	console.info(`🍃 MongoDB Connected.✅`);
});

connection.on('connecting', () => {
	console.info('🍃 Connecting to MongoDB...🔌');
});

connection.on('error', (err) => {
	console.error('🍃 MongoDB Connection ERROR ❌');
	console.error(err);
});
