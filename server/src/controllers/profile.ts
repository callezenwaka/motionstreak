import 'dotenv/config';
import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import axios from 'axios';
import { create } from 'ipfs-http-client';
// import Account from '../types/Account';
import { profileAddress } from '../config';
import Profiles from '../../artifacts/contracts/Profiles.sol/Profiles.json';
// import client = create('https://ipfs.infura.io:5001/api/v0');
const client = create({ host: 'localhost', port: 5001, protocol: 'http' });

/**
 * [START POST PROFILE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Add profile
 */
 export const addProfile = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create an account
    const { photoURL } = req.body;
    if (!photoURL) return;
    // const data = JSON.stringify({
    //   photoURL,
    // });
    // const result = await client.add(data);
    // const url = `https://ipfs.infura.io/ipfs/${result.path}`;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const profilesContract = new ethers.Contract(profileAddress, Profiles.abi, signer);

    const res = await profilesContract.addProfile(photoURL);
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST PROFILE]

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
 * [START GET PROFILE]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve profile
 */
export const getProfile = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for transaction
    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${req.wallet}`);
    const signer = wallet.connect(provider);
    const profilesContract = new ethers.Contract(profileAddress, Profiles.abi, signer);

    const result = await profilesContract.getProfile(req.address);
    let profile = {
      displayName: result.displayName,
      email: result.email,
      photoURL: result.photoURL,
      fees: result.fees,
    }

		if (!profile) {
			return res.status(200).json({});
		}
    
		return res.status(200).json(profile);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET PROFILE]

export default {
	addProfile,
  postImage,
  getProfile,
}