import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
// import axios from 'axios';
import { create } from 'ipfs-http-client';
import Document from '../types/Document';
import { documentAddress } from '../config';
import Documents from '../../artifacts/contracts/Documents.sol/Documents.json';
const client = create({ host: 'localhost', port: 5001, protocol: 'http' });

/**
 * [START GET DOCUMENTS]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve items
 */
 export const getDocuments = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for fees
    const { address } = req.query;
    if (!address) return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const accountsContract = new ethers.Contract(documentAddress, Documents.abi, signer);

    let documents:Document[] = [];
    const results = await accountsContract.getDocuments(address);
    if (!results.length) {
			return res.status(200).json([]);
		}
    documents = await results.map(async (result:any) => {
      return {
        requester: result.requester,
        verifier: result.verifier,
        certifier: result.certifier,
        name: result.name,
        description: result.description,
        image: result.image,
        fee: result.fee,
        index: result.index,
        status: result.status,
      }
    });
    
		return res.status(200).json(documents);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET DOCUMENTS]

/**
 * [START POST DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Add item
 */
 export const addDocument = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and  add a fee
    const { certifier, verifier, name, description, fee } = req.body;
    if (!certifier || !verifier || !name || !description || !fee) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, signer);

    const res = await documentContract.addDocument(certifier, verifier, name, description, fee);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST DOCUMENT]

/**
 * [START GET DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve item
 */
export const getDocument = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for fee
    const { index } = req.query;
    if (!index) return;
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, signer);

    const result = await documentContract.getDocument(index);
		if (!result) {
			return res.status(200).json({});
		}
    let document = { 
      requester: result.requester,
      verifier: result.verifier,
      certifier: result.certifier,
      name: result.name,
      description: result.description,
      image: result.image,
      fee: result.fee,
      index: result.index,
      status: result.status,
    }

		return res.status(200).json(document);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET DOCUMENT]

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
 * [START UPDATE DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Updatea item
 */
export const updateDocument = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and update a fee
    const { image, fee, status, index } = req.body;
    if (!image || !fee || !status || !index) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.secret}`);
    const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, signer);

    const res = await documentContract.updateDocument(image, index, fee, status);
    await res.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END UPDATE DOCUMENT]


export default {
  getDocuments,
	addDocument,
  getDocument,
  postImage,
  updateDocument,
}