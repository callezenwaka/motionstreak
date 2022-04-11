'use strict';

// Import packages and dependencies
import Multer from 'multer';
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

export const updateUser = async (req: any, res: any, next: any) => {
  try {
    // Get users from request body, and add each to database
    const { displayName, photoURL, phoneNumber, uid, email, password, role, isActive, isActivated } = req.body;
    req.uid = uid;
    req.role = role;
    req.isActive = isActive;
    req.isActivated = isActivated;
    if(uid !== undefined && password === undefined) {
      await admin.auth().updateUser(uid, {
        displayName: displayName,
        phoneNumber: phoneNumber,
        photoURL: photoURL,
        emailVerified: true,
      });
    } else {
      const user = await admin.auth().createUser({
        email,
        phoneNumber,
        password,
        displayName,
        photoURL,
        emailVerified: true,
        disabled: false,
      });
      req.uid = user.uid;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(501).json('Internal error!');
  }
};

export const createWallet = async (req: any, res: any, next: any) => {
  try {
    const wallet = ethers.Wallet.createRandom();
    req.address = wallet.address;
    req.secret = wallet.privateKey;
    next();
  } catch (error) {
    console.log(error);
    return res.status(501).json('Internal error!');
  }
};

export const setClaim = async (req: any, res: any, next: any) => {
  try {
    const { address, role, isActive, isActivated, uid } = req;
    // const { role, isActive, isActivated, uid } = req.body;
    const affiliate = role.toLowerCase() === 'admin'? req.body.affiliate : address;
    console.log(role, isActive, isActivated, affiliate, address, uid);
    await admin.auth().setCustomUserClaims(uid, {
      role, 
      isActive, 
      isActivated, 
      address,
      affiliate,
    });
    next();
  } catch (error) {
    console.log(error);
    return res.status(501).json('Internal error!');
  }
}

export const postSecret = async (req: any, res: any, next: any) => {
  try {
    // Get users from request body, and add each to database
    await admin.firestore().collection('secrets').doc(req.uid).set({ secret: req.secret });
    next();
  } catch (error) {
    console.log(error);
    return res.status(501).json('Internal error!');
  }
};

export const multer = Multer({
  storage: Multer.memoryStorage(),
  // no larger than 5mb
  limits: { fileSize: 5 * 1024 * 1024 },
});