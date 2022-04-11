import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import Service from '../types/Service';
import { serviceAddress } from '../config';
import Services from '../../artifacts/contracts/Services.sol/Services.json';
import { services } from "../../data/data";

/**
 * [START GET SERVICES]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve items
 */
 export const getServices = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for services
    const { address } = req.query;
    if (!address) return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    let services:Service[] = [];
    const results = await accountsContract.getServices(address);
    if (!results.length) {
			return res.status(200).json([]);
		}
    services = await results.map(async (result:any) => {
      console.log(result);
      return {
        name: result.name,
        cost: result.cost,
        index: result.index,
      }
    });
    
		return res.status(200).json(services);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET SERVICES]

/**
 * [START POST SERVICE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Add item
 */
 export const addService = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and  add a service
    const { name, cost } = req.body;
    if (!name || !cost) return;
    console.log(name, cost);
    return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const res = await servicesContract.addService(name, cost);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST SERVICE]



/**
 * [START GET SERVICE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve item
 */
export const getService = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for service
    const { index } = req.params;
    if (!index) return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const result = await servicesContract.getService(index);
    if (!result) {
			return res.status(200).json({});
		}
    let service = { 
      name: result.name,
      cost: result.cost
    }
    
		return res.status(200).json(service);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET SERVICE]

/**
 * [START UPDATE SERVICE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Updatea item
 */
export const updateService = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and update a service
    const { name, cost } = req.body;
    if (!name || !cost) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const res = await servicesContract.updateService(name, cost, req.params.index);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END UPDATE SERVICE]

/**
 * [START DELETE SERVICE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Remove item
 */
export const deleteService = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and remove a service
    const { index } = req.params;
    if (!index) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, signer);

    const res = await servicesContract.deleteService(index);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END DELETE SERVICE]

export default {
  getServices,
	addService,
  getService,
  updateService,
  deleteService,
}