'use strict'

import admin from 'firebase-admin';
import { ethers } from 'ethers';

/**
 * [START GET TOKEN]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 */
const getAuthToken = (req: any, res: any, next: any) => {
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
export const isAuthenticated = (req: any, res: any, next: any) => {
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

export const createWallet = async (req: any, res: any, next: any) => {
  // wallet: {
  //   generateWallet: () => state => {
    try {
			const wallet = ethers.Wallet.createRandom();
			// console.log(wallet);
			// console.log(wallet.address);
			// console.log(wallet.privateKey);
			req.address = wallet.address;
			req.secret = wallet.privateKey;
      // return {
      //   privateKey: wallet.privateKey,
      //   address: wallet.address
      // };
			return next();
		} catch (error) {
			return res.status(501).json('Internal error!');
		}
  //   },
  // },
};
// getAuth()
//   .createCustomToken(uid)
//   .then((customToken) => {
//     // Send token back to client
//   })
//   .catch((error) => {
//     console.log('Error creating custom token:', error);
//   });

// export default {
// 	isAuthenticated,
// 	createWallet,
// };