'use strict'

const admin = require('firebase-admin');

/**
 * [START GET TOKEN]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 */
const getAuthToken = (req, res, next) => {
	console.log(req.headers.authorization);
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		req.authToken = req.headers.authorization.split(' ')[1];
	} else {
		req.authToken = null;
	}
	next();
};
// [END GET TOKEN]

/**
 * [START CHECK AUTH]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define auth middleware.
 */
const isAuthenticated = (req, res, next) => {
	getAuthToken(req, res, async () => {
		try {
			const { authToken } = req;
			const userInfo = await admin.auth().verifyIdToken(authToken);
			req.user = userInfo;
			return next();
		} catch (error) {
			return res.status(401).json('Unauthorized access!');
		}
	});
}
// [END CHECK AUTH]

// getAuth()
//   .createCustomToken(uid)
//   .then((customToken) => {
//     // Send token back to client
//   })
//   .catch((error) => {
//     console.log('Error creating custom token:', error);
//   });

export default {
	isAuthenticated,
};