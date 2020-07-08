import express, { Application } from 'express';

import { connectDB } from './data';
import { applyMiddlewares } from './modules';
import { applyRoutes } from './presentation';

export async function startServer() {
	const app: Application = express();

	connectDB();

	await applyMiddlewares(app);

	await applyRoutes(app);

	const PORT: string | number = process.env.PORT || 7575;

	app.listen(PORT, () => console.log(`||| Server Running on port: ${PORT}`));
}
