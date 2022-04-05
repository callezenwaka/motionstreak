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
 * [START POST ACCOUNT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve account
 */
 export const addAccount = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create an account
    const { displayName, email, phoneNumber, isTenant, isActive, isActivated } = req.body;
    if (!displayName || !email || !phoneNumber || !isTenant || !isActive || !isActivated) return;
    // const data = JSON.stringify({
    //   displayName,
    //   email,
    //   phoneNumber,
    //   isTenant,
    //   isActive,
    //   isActivated,
    // });
    // const result = await client.add(data);
    // const url = `https://ipfs.infura.io/ipfs/${result.path}`;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.addAccount(displayName, email, phoneNumber, isTenant, isActive, isActivated);
    
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
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const result = await accountsContract.getAccount(req.address);
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
// [END GET ACCOUNT]

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
    const { displayName, email, phoneNumber } = req.body;
    if (!displayName || !email || !phoneNumber) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(accountAddress, Accounts.abi, signer);

    const res = await accountsContract.updateAccount(displayName, email, phoneNumber);
    
		return res.status(200).json('Success');
	} catch (error) {
    console.log(error);
		return res.status(500).json('Internal Server Error!');
	}
}
// [END PUT ACCOUNT]

export default {
	addAccount,
  getAccount,
	updateAccount,
}