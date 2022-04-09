import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { accountAddress } from '../config';
import Accounts from '../../artifacts/contracts/Accounts.sol/Accounts.json';
const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

/**
 * [START POST ACCOUNT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Add account
 */
 export const addAccount = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create an account
    const { displayName, email, phoneNumber, photoURL, role, isActivated } = req.body;
    if (!displayName || !email || !phoneNumber || !photoURL || !role || !isActivated) return;
    console.log(displayName, email, phoneNumber, photoURL, role, isActivated);
    return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.addAccount(req.address, displayName, email, phoneNumber, role, isActivated);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST ACCOUNT]

/**
 * [START GET ACCOUNT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve account
 */
export const getAccount = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for transaction
    const { address } = req.params;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const result = await accountsContract.getAccount(address);
    let account = {
      displayName: result.displayName,
      email: result.email,
      phoneNumber: result.phoneNumber,
      photoURL: result.photoURL,
      role: result.role,
      isActive: result.isActive,
      isActivated: result.isActivated,
      address: address,
      affiliate: result.affiliate,
    }

		if (!account) {
			return res.status(200).json({});
		}
    
		return res.status(200).json(account);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET ACCOUNT]

/**
 * [START POST IMAGE]
 * Create a request. If an image is uploaded, add public URL from cloud storage to firestore
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object}
 * Add image
 */
 export const postImage = async (req: any, res: Response, next: NextFunction) => {
  try {
    // TODO: add file
    console.log(req.file);
    if (!req.file) {
      return res.json("Please choose file to upload!");
    }
    // return;
    // Send url back to client
    const result = await client.add(Buffer.from(req.file.buffer));
    const photoURL = `https://ipfs.infura.io/ipfs/${result.path}`;
    console.log(photoURL);
    return res.status(200).json(photoURL);
  } catch (error) {
		return res.status(500).json('Internal Server Error!');
  }
};
// [END POST IMAGE]

/**
 * [START PUT ACCOUNT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json items
 * Update account
 */
 export const updateAccount = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: update an account
    console.log('req: ',req.params);
    const { address, displayName, email, phoneNumber, photoURL, isActive } = req.body;
    if (!address || !displayName || !email || !phoneNumber || !photoURL || !isActive) return;
    console.log('req: ',req.body);
    return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.updateAccount(address, displayName, email, phoneNumber, photoURL, isActive);
    
		return res.status(200).json('Success');
	} catch (error) {
    console.log(error);
		return res.status(500).json('Internal Server Error!');
	}
}
// [END PUT ACCOUNT]

// Delete
// https://ethereum.stackexchange.com/questions/15277/how-to-delete-an-element-from-a-mapping
// https://ethereum.stackexchange.com/questions/45374/delete-an-element-from-mapping-of-address-to-struct-array?rq=1

export default {
	addAccount,
  getAccount,
  postImage,
	updateAccount,
}