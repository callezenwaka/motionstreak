import { Response, NextFunction } from "express";
import { BigNumber, ethers, utils } from 'ethers';
import Service from '../types/Service';
import { serviceAddress } from '../config';
import Services from '../../artifacts/contracts/Services.sol/Services.json';
// import { services } from "../../data/data";

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
    const { affiliate } = req.query;
    // console.log("affiliate: ", affiliate);
    // console.log(req.signer);
    // return res.status(200).json(req.signer);
    
    // const address = req.query['0'];
    // console.log(address)
    // if (!address) return;
    // const data = services.find(service => {
    //   if (service.address == address) {
    //     return service;
    //   }
    // });


    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, req.signer);

    let services:Service[] = [];
    const results = await servicesContract.getServices(affiliate);
    if (!results.length) {
			return res.status(200).json([]);
		}
    services =  await Promise.all(results.map(async (result:any) => {
      console.log(result);
      return {
        name: result.name,
        // cost: BigNumber.from(result.cost.toString()),
        // cost: utils.parseEther(result.cost.toString()),
        cost: Number(ethers.utils.formatUnits(result.cost.toString(), 'ether')),
        index: result.index.toNumber(),
      }
    }));
    console.log("services: ", services)
    
		return res.status(200).json(services);
	} catch (error) {
    console.log(error);
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
    const _cost = ethers.utils.parseUnits(cost.toString(), 'ether');
    console.log(name, _cost);
    // return;
    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, req.signer);

    const result = await servicesContract.addService(name, _cost);
    await result.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
    console.log(error);
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
    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, req.signer);

    const result = await servicesContract.getService(index);
    if (!result) {
			return res.status(200).json({});
		}
    let service = { 
      name: result.name,
      // cost: result.cost
      cost: Number(ethers.utils.formatUnits(result.cost.toString(), 'ether')),
      index: result.index.toNumber(),
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
    const { index } = req.params;
    if (!name || !cost || !index) return;
    const _cost = ethers.utils.parseUnits(cost.toString(), 'ether');

    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, req.signer);

    const result = await servicesContract.updateService(name, _cost, index);
    await result.wait();
    
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

    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const servicesContract = new ethers.Contract(serviceAddress, Services.abi, req.signer);

    const result = await servicesContract.deleteService(index);
    await result.wait();
    
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