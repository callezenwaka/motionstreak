import 'dotenv/config';
import { Response, NextFunction } from "express";
import { ethers } from 'ethers';

/**
 * [START GET ALL TRANSACTIONS]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json items
 * Retrieve items
 */
export const getTests = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for transactiona
    
		return res.status(200).json('transactions');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET ALL TRANSACTIONS]


/**
 * [START SEND TRANSACTION]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json items
 * Send item
 */
export const postTest = async (req: any, res: Response, next: NextFunction) => {
  try {
    // Todo: create a provider and send transaction

    return res.status(200).json('transactionHash');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
}
// [END SEND TRANSACTION]

export default {
	getTests,
  postTest,
}