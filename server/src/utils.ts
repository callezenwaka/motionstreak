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
	// console.log(req.headers.authorization);
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
export const isAuthenticated = async (req: any, res: any, next: any) => {
	getAuthToken(req, res, async () => {
		try {
      // TODO: verify token
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

/**
 * [START CHECK ADMIN]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const isSigner = async (req: any, res: any, next: any) => {
    try {
      // TODO: get signer identity
      // if(!req.user.isActive || !req.user.isActivated) return;
      // const secret = await admin.firestore().collection('secrets').doc(req.user.uid).get();
      // if (!secret.exists) return res.status(401).json('Unauthorized access!');
      // req.secret = secret?.data()?.secret;

      // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
      // const wallet = new ethers.Wallet(`${req.secret}`);
      // req.signer = wallet.connect(provider);
      // console.log(req.body);

      const { private_key } = req.query;
      // console.log(private_key);
      const provider = new ethers.providers.JsonRpcProvider();
      const wallet = new ethers.Wallet(`${private_key}`);
      req.signer = wallet.connect(provider);
      console.log(req.signer);
      
      return next();
    } 
    catch (error) {
      console.log(error);
      return res.status(501).json('Unauthorized request!');
    }
};
// [END CHECK ADMIN]

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
    // TODO: create wallet
    const { address } = req.body;
    const wallet = ethers.Wallet.createRandom();
    req.address = wallet.address;
    req.secret = wallet.privateKey;
    if(req.role.toLowerCase() === 'admin') {
      req.affiliate = address;
    } else {
      req.affiliate = wallet.address;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(501).json('Internal error!');
  }
};

export const createTestWallet = async (req: any, res: any, next: any) => {
  try {
    // TODO: create test wallet
    const { private_key, address, role } = req.body;
    const wallet = new ethers.Wallet(`${private_key}`);
    req.address = wallet.address;
    if(role.toLowerCase() === 'admin') {
      req.affiliate = address;
    } else {
      req.affiliate = wallet.address;
    }
    // req.affiliate = address;
    // req.affiliate = wallet.address;
    // console.log(req.address);

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