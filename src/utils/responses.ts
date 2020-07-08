import { Response } from 'express';

/**
 * Class Responses
 *
 * Class with default api responses
 */
export class Responses {
	constructor() {}

	/**
	 * success
	 *
	 * Response with status code 200 with a payload (data)
	 *
	 * @param res
	 * @param payload
	 */
	public success(res: Response, payload: any) {
		return res.status(200).json({ success: true, payload }).end();
	}

	/**
	 * created
	 *
	 * Response with status code 201 with a payload
	 *
	 * @param res
	 * @param payload
	 */
	public created(res: Response, payload: any) {
		return res.status(201).json({ success: true, payload }).end();
	}

	/**
	 * error
	 *
	 * Response with status code 400 with errorMessage and the error
	 *
	 * @param res
	 * @param errorMessage
	 * @param errors
	 * @param error
	 */
	public async error(
		res: Response,
		errorMessage: string,
		errors: any,
		error?: any
	) {
		console.error(
			error?.message
				? `${error?.message} - ${error?.stack?.split('at ')[1]}`
				: `${errorMessage}`
		);

		return res
			.status(400)
			.json({
				success: false,
				errorMessage: error?.message ? error.message : errorMessage,
				errors,
			})
			.end();
	}

	/**
	 * unauthorized
	 *
	 * Response with status code 401 with a message
	 *
	 * @param res
	 * @param errorMessage
	 */
	public unauthorized(res: Response, errorMessage: string) {
		return res.status(401).json({ success: false, errorMessage }).end();
	}

	/**
	 * serverError
	 *
	 * Response with status code 500 and the error
	 *
	 * @param res
	 * @param errorMessage
	 * @param error
	 */
	public serverError(res: Response, errorMessage: string, error: any) {
		return res
			.status(500)
			.json({
				success: false,
				errorMessage,
				error: {
					...error,
					errorMessage: error.message,
				},
			})
			.end();
	}

	/**
	 * notFound
	 *
	 * Response with status code 404
	 *
	 * @param res
	 * @param errorMessage
	 */
	public notFound(res: Response, errorMessage: string) {
		return res.status(404).json({ success: false, errorMessage }).end();
	}
}
