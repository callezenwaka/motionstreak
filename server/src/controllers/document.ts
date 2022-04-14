import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import Document from '../types/Document';
import { documentAddress } from '../config';
import Documents from '../../artifacts/contracts/Documents.sol/Documents.json';
// import { documents } from "../../data/data";
const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// import { create } from 'ipfs-http-client';
// const client = create(new URL(`https://ipfs.infura.io:${5001}/api/v0`))
// const client = create(`https://ipfs.infura.io:${5001}/api/v0`);
// import { documents } from "../../data/data";
// console.log(documents);

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
		// Todo: create a provider and query for documents
    // const affiliate = req.query['0'];
    const {affiliate} = req.query;
    if (!affiliate) return;
    // let data = documents.filter(document => {
    //   if (affiliate == document.certifier) {
    //     return document;
    //   }
    //   if (affiliate == document.verifier) {
    //     return document;
    //   }
    //   if (affiliate == document.requester) {
    //     return document;
    //   }
    //   return;
    // })

    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, req.signer);

    let documents:Document[] = [];
    const results = await documentContract.getDocuments(affiliate);
    if (!results.length) {
			return res.status(200).json([]);
		}
    documents =  await Promise.all(results.map(async (result:any) => {
      return {
        requester: result.requester,
        verifier: result.verifier,
        certifier: result.certifier,
        name: result.name,
        imageURL: result.imageURL,
        fee: Number(ethers.utils.formatUnits(result.fee.toString(), 'ether')),
        index: Number(result.index),
        status: result.status,
      }
    }));
    console.log(documents);
    
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
		// TODO: create a provider and add a document
    const { certifier, verifier, requester, name, imageURL, fee } = req.body;
    if (!certifier || !verifier || !name || !requester || !fee) return;
    console.log(req.body);
    // documents.push({
    //   verifier,
    //   certifier,
    //   requester,
    //   name,
    //   imageURL,
    //   index: documents.length,
    //   fee,
    //   status: 0,
    // });
    // console.log(documents.length);

    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, req.signer);

    const _fee = ethers.utils.parseUnits(fee.toString(), 'ether');
    const result = await documentContract.addDocument(certifier, verifier, name, _fee, { value: _fee });
    await result.wait();
    console.log(result);
    
		return res.status(200).json('Success');
	} catch (error) {
    console.log(error);
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
		// Todo: create a provider and query for document
    const { index } = req.params;
    if (!index) return;
    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, req.signer);

    const result = await documentContract.getDocument(index);
		if (!result) {
			return res.status(200).json({});
		}
    let document = { 
      requester: result.requester,
      verifier: result.verifier,
      certifier: result.certifier,
      name: result.name,
      imageURL: result.imageURL,
      fee: Number(ethers.utils.formatUnits(result.fee.toString(), 'ether')),
      index: Number(result.index),
      status: result.status,
    }

		return res.status(200).json(document);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET DOCUMENT]

/**
 * [START GET DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve items
 */
export const getMetrics = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for metrics
    console.log(req.query);
    const { address } = req.query;
    console.log(address);
    if (!address) return;
    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, req.signer);

    const result = await documentContract.getMetrics(address);
    console.log(result);
		if (!result) {
			return res.status(200).json({});
		}
    let metrics = {
      pending: Number(result[0]),
      certified: Number(result[1]),
      declined: Number(result[2]),
      verified: Number(result[3]),
      rejected: Number(result[4]),
      total: Number(result[5]),
    }
    console.log(metrics);

		return res.status(200).json(metrics);
	} catch (error) {
    console.log(error);
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
    // TODO: Add file
    if (!req.file) {
      return res.json("Please choose file to upload!");
    }
    // Send url back to client
    const result = await client.add(Buffer.from(req.file.buffer));
    const imageURL = `https://ipfs.infura.io/ipfs/${result.path}`;

    return res.status(200).json(imageURL);
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
		// TODO: create a provider and update a document
    const { index } = req.params;
    console.log(req.params);
    console.log(req.body);
    const { imageURL, fee, status } = req.body;
    if (!imageURL || !fee || !status || !index) return;
    // const index = documents.findIndex(document => document.address == address);
    // let document = documents.find(document => document.index == req.params.index);
    // console.log('req: ', req.params);
    // const { status, index } = req.body;
    // if (!status ) return;
    // if(!document) return;
    // document.status = status;
    // documents[index] = document;


    // const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    // const wallet = new ethers.Wallet(`${req.secret}`);
    // const signer = wallet.connect(provider);
    const documentContract = new ethers.Contract(documentAddress, Documents.abi, req.signer);

    // const _fee = ethers.utils.parseUnits(fee.toString(), 'ether');
    const result = await documentContract.updateDocument(imageURL, index, status);
    await result.wait();
    console.log(result);
    
		return res.status(200).json('Success');
	} catch (error) {
    console.log(error);
		return res.status(500).json('Internal Server Error!');
	}
}
// [END UPDATE DOCUMENT]


export default {
  getDocuments,
	addDocument,
  getDocument,
  getMetrics,
  postImage,
  updateDocument,
}