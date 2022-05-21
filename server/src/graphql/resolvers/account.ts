import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLBoolean } from 'graphql';
import { AccountType } from "../types/Account";
import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { accountAddress, accountsABI } from '../../config';
const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// import { seedData } from '../../seedData';

export const Accounts = {
	name: "Accounts",
	description: "This request gets all accounts",
	type: new GraphQLList(AccountType),
	resolve: async (parent: any, args: any) => {
		// const accounts = seedData;
		return 'Success';
	}
};

export const Account = {
	name: "Account",
	description: "This request gets a single account",
	type: AccountType,
	args: { address: { type: GraphQLString } },
	resolve: async (parent: any, args: { address?: string; }, context: any) => {
    // const id = Number(args.id);
		// const account = await seedData.find(account => account.id === id);
		// return account;
    // if(!args.address) return;
    const accountsContract = new ethers.Contract(accountAddress, accountsABI, context.req.signer);
    const result = await accountsContract.getAccount(args.address);
    let account = {
      displayName: result.displayName,
      email: result.email,
      phoneNumber: result.phoneNumber,
      photoURL: result.photoURL,
      role: result.role,
      isActive: result.isActive,
      isActivated: result.isActivated,
      address: args.address,
      affiliate: result.affiliate,
    }

    return account;
	}
};

export const addAccount = {
  name: "add Account",
	description: "This requests add a single account",
  type: AccountType,
  args: {
    displayName: {type: GraphQLString},
    phoneNumber: {type: GraphQLString},
    email: {type: GraphQLString},
    photoURL: {type: GraphQLString},
    role: {type: GraphQLString},
    affiliate: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    isActivated: {type: GraphQLBoolean},
  },
  resolve: async (
    parent: any, 
    args: { 
      displayName?: string; 
      phoneNumber?: string; 
      email?: string; 
      photoURL?: string; 
      role?: string; 
      isActive?: boolean;
      isActivated?: boolean; 
    },
    context: any
  ) => {
    // const new_account = seedData.push({ id: seedData.length + 1, name: args.name, league: args.league });
    // console.log(new_account, ...args);
    // return {id: new_account, ...args};
    // TODO: should refactor, signer should be deployed account
    // const {displayName, email, phoneNumber, photoURL, role, isActive, isActivated } = req.body;
    // if (!displayName || !email || !phoneNumber || !photoURL || !role || !isActive || !isActivated) return;
    if (!args.displayName || !args.phoneNumber || !args.email || !args.photoURL || !args.role || !args.isActive || !args.isActivated) return;

    const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const wallet = new ethers.Wallet(`${process.env.ACCOUNT_PRIVATE_KEY}`);
    const signer = wallet.connect(provider);

    const accountsContract = new ethers.Contract(accountAddress, accountsABI, signer);
    const result = await accountsContract.addAccount(context.req.address, context.req.affiliate, args.displayName, args.phoneNumber, args.email, args.photoURL, args.role, args.isActive, args.isActivated);
    await result.wait();

    return {...args};
  }
}

export const updateAccount = {
  name: "Update Account",
	description: "This request updates a single account",
  type: AccountType,
  args: {
    address: {type: GraphQLString},
    displayName: {type: GraphQLString},
    phoneNumber: {type: GraphQLString},
    email: {type: GraphQLString},
    photoURL: {type: GraphQLString},
    role: {type: GraphQLString},
    affiliate: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    isActivated: {type: GraphQLBoolean},
  },
  resolve: async (
    parent: any, 
    args: { 
      address?: string; 
      displayName?: string; 
      phoneNumber?: string; 
      email?: string; 
      photoURL?: string; 
      role?: string; 
      isActive?: boolean;
      isActivated?: boolean; 
    },
    context: any
  ) => {
    // const { id, name, league } = args;
    // const _id = Number(id);
    // const account = seedData.findIndex(account => account.id === _id);
		// const update_account = seedData.splice(account, 1, { id: _id, name, league });
    // console.log(update_account);
    // return update_account;
    const accountsContract = new ethers.Contract(accountAddress, accountsABI, context.req.signer);
    const result = await accountsContract.updateAccount(args.address, args.displayName, args.email, args.phoneNumber, args.photoURL, args.isActive);
    await result.wait();

    return 'Success';
  }
}

export const deleteAccount = {
  name: "Delete Account",
	description: "This request deletes a single account",
  type: AccountType,
  args: { address: { type: GraphQLString } },
  resolve: async (parent: any, args: { address?: string; }) => {
    // const id = Number(args.id);
    // const account = seedData.findIndex(account => account.id === id);
		// const deleted_account = seedData.splice(account, 1);
    // return deleted_account;

    return 'Success'
  }
}

// const RootQuery = new GraphQLObjectType({
// 	name: "RootQuery",
// 	description: "This is the rootquery",
// 	fields: {
// 		accounts,
// 		singleAccount
// 	}
// });

// const RootMutation = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {
//     addAccount,
//     deleteAccount,
//     updateAccount
//   }
// });

// export { RootQuery, RootMutation };