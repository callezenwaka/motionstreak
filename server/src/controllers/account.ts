import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { accountAddress } from '../config';
import Accounts from '../../artifacts/contracts/Accounts.sol/Accounts.json';
const client = create({ host: 'localhost', port: 5001, protocol: 'http' });

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
    const { displayName, email, phoneNumber, photoURL, isTenant, isActivated } = req.body;
    if (!displayName || !email || !phoneNumber || !photoURL || !isTenant || !isActivated) return;
    // const data = JSON.stringify({
    //   displayName,
    //   email,
    //   phoneNumber,
    //   photoURL,
    //   isTenant,
    //   isActive,
    //   isActivated,
    // });
    // const result = await client.add(data);
    // const url = `https://ipfs.infura.io/ipfs/${result.path}`;
    console.log(displayName, email, phoneNumber, photoURL, isTenant, isActivated);
    return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.addAccount(req.address, displayName, email, phoneNumber, isTenant, isActivated);
    
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
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const result = await accountsContract.getAccount(req.address);
    let account = {
      displayName: result.displayName,
      email: result.email,
      phoneNumber: result.phoneNumber,
      photoURL: result.photoURL,
      isTenant: result.isTenant,
      isActive: result.isActive,
      isActivated: result.isActivated,
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
    // Add file
    if (!req.file) {
      return res.json("Please choose file to upload!");
    }

    // Send url back to client
    let result = await client.add(Buffer.from(req.file.buffer));
    const image = `https://ipfs.infura.io/ipfs/${result.path}`;
    return res.status(200).json(image);
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
    const { address, displayName, email, phoneNumber, photoURL, isActive } = req.body;
    if (!address || !displayName || !email || !phoneNumber || !photoURL || !isActive) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
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