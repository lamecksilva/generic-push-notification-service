import { Application, json, urlencoded } from 'express';
import morgan from 'morgan';

/**
 * applyMiddlewares
 *
 * @param app
 *
 * Apply all middlewares for http express server
 */
export async function applyMiddlewares(app: Application) {
	process.env.NODE_ENV === 'development' && app.use(morgan('dev'));

	app.use(json());
	app.use(urlencoded({ extended: true }));
	app.set('x-powered-by', false);
	app.disable('x-powered-by');
	app.set('trust proxy', 'loopback');
	app.set('env', process.env.NODE_ENV);

	console.log('Middlewares Applieds');
}
