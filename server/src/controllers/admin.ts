import 'dotenv/config';
import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import axios from 'axios';
import { create } from 'ipfs-http-client';
// import Account from '../types/Account';
import { accountAddress } from '../config';
import Accounts from '../../artifacts/contracts/Accounts.sol/Accounts.json';
// import client = create('https://ipfs.infura.io:5001/api/v0');
const client = create({ host: 'localhost', port: 5001, protocol: 'http' });

/**
 * [START POST ADMIN]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve account
 */
 export const addAdmin = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create an account
    const { address, displayName, email, phoneNumber, isTenant, isActive, isActivated } = req.body;
    if (!address || !displayName || !email || !phoneNumber || !isTenant || !isActive || !isActivated) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.addAdmin(address, displayName, email, phoneNumber, isTenant, isActive, isActivated);
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST ADMIN]

/**
 * [START GET ADMIN]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve account
 */
export const getAdmin = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for transaction
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const result = await accountsContract.getAdmin(req.address);
    let account = {
      displayName: result.displayName,
      email: result.email,
      phoneNumber: result.phoneNumber,
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
// [END GET ADMIN]

/**
 * [START PUT ADMIN]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json items
 * Update account
 */
 export const updateAdmin = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: update an account
    const { displayName, email, phoneNumber, isActive } = req.body;
    if (!displayName || !email || !phoneNumber || !isActive) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.updateAdmin(isActive, displayName, email, phoneNumber);
    
		return res.status(200).json('Success');
	} catch (error) {
    console.log(error);
		return res.status(500).json('Internal Server Error!');
	}
}
// [END PUT ADMIN]

export default {
	addAdmin,
  getAdmin,
	updateAdmin,
}