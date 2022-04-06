import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
// import axios from 'axios';
// import { create } from 'ipfs-http-client';
import Fee from '../types/Fee';
import { serviceAddress } from '../config';
import Services from '../../artifacts/contracts/Services.sol/Services.json';
// import client = create('https://ipfs.infura.io:5001/api/v0');
// const client = create({ host: 'localhost', port: 5001, protocol: 'http' });

/**
 * [START GET FEES]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve items
 */
 export const getFees = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for fees
    const { address } = req.query;
    if (!address) return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    let fees:Fee[] = [];
    const results = await accountsContract.getFees(address);
    if (!results.length) {
			return res.status(200).json([]);
		}
    fees = await results.map(async (result:any) => {
      return {
        name: result.name,
        cost: result.cost,
      }
    });
    
		return res.status(200).json(fees);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET FEES]

/**
 * [START POST FEE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Add item
 */
 export const addFee = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and  add a fee
    const { name, cost } = req.body;
    if (!name || !cost) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const res = await servicesContract.addFee(name, cost);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST FEE]



/**
 * [START GET FEE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve item
 */
export const getFee = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for fee
    const { index } = req.params;
    if (!index) return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const result = await servicesContract.getFee(index);
    if (!result) {
			return res.status(200).json({});
		}
    let fee = { 
      name: result.name,
      cost: result.cost
    }
    
		return res.status(200).json(fee);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET FEE]

/**
 * [START UPDATE FEE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Updatea item
 */
export const updateFee = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and update a fee
    const { name, cost, index } = req.body;
    if (!name || !cost || !index) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const res = await servicesContract.updateFee(name, cost, index);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END UPDATE FEE]

/**
 * [START DELETE FEE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Remove item
 */
export const deleteFee = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and remove a fee
    const { index } = req.params;
    if (!index) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const res = await servicesContract.deleteFee(index);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END DELETE FEE]

export default {
  getFees,
	addFee,
  getFee,
  updateFee,
  deleteFee,
}