import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt, GraphQLFloat } from 'graphql';
import { DocumentType } from "../../types/Document";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { documentAddress, documentsABI } from '../../config';
// import { seedData } from '../../seedData';

export const Documents = {
	name: "Documents",
	description: "This request gets all documents",
	type: new GraphQLList(DocumentType),
	args: { affiliate: { type: GraphQLString } },
	resolve: async (parent: any, args: any, context: any) => {
		// const clubs = seedData;
		// return clubs;
    if (!args.affiliate) return;

    const documentContract = new ethers.Contract(documentAddress, documentsABI, context.signer);
    const results = await documentContract.getDocuments(args.affiliate);
    // if (!results.length) return res.status(200).json([]);

    // let documents:DocumentType[] = [];
    const documents = await Promise.all(results.map(async (result:any) => {
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

    return documents;
	}
};

export const Document = {
	name: "Document",
	description: "This request gets a single document",
	type: DocumentType,
	args: { index: { type: GraphQLInt } },
	resolve: async (parent: any, args: { index: number; }, context: any) => {
    // const id = Number(args.id);
		// const club = await seedData.find(club => club.id === id);
		// return club;
    if (!args.index) return;
    const documentContract = new ethers.Contract(documentAddress, documentsABI, context.signer);
    const result = await documentContract.getDocument(args.index);

    const document = { 
      requester: result.requester,
      verifier: result.verifier,
      certifier: result.certifier,
      name: result.name,
      imageURL: result.imageURL,
      fee: Number(ethers.utils.formatUnits(result.fee.toString(), 'ether')),
      index: Number(result.index),
      status: result.status,
    }

    return document;
	}
};

export const addDocument = {
  name: "addDocument",
	description: "This requests add a single document",
  type: DocumentType,
  args: {
    certifier: {type: GraphQLString},
    verifier: {type: GraphQLString},
    requester: {type: GraphQLString},
    name: {type: GraphQLString},
    imageURL: {type: GraphQLString},
    fee: {type: GraphQLFloat},
  },
  resolve: async (
    parent: any, 
    args: { 
      certifier: string; 
      verifier: string; 
      requester: string; 
      name: string; 
      imageURL: string; 
      fee: number;
    }, 
    context: any
  ) => {
    // const new_club = seedData.push({ id: seedData.length + 1, name: args.name, league: args.league });
    // // console.log(new_club, ...args);
    // return {id: new_club, ...args};
    if (!args.certifier || !args.verifier || !args.name || !args.requester || !args.fee) return;
    const fee = ethers.utils.parseUnits(args.fee.toString(), 'ether');

    const documentContract = new ethers.Contract(documentAddress, documentsABI, context.signer);
    const result = await documentContract.addDocument(args.certifier, args.verifier, args.name, fee, { value: fee });
    await result.wait();

    return 'Success';
  }
}

export const updateDocument = {
  name: "updateDocument",
	description: "This request updates a single document",
  type: DocumentType,
  args: {
    certifier: {type: GraphQLString},
    verifier: {type: GraphQLString},
    requester: {type: GraphQLString},
    name: {type: GraphQLString},
    imageURL: {type: GraphQLString},
    fee: {type: GraphQLFloat},
    index: {type: GraphQLInt},
    status: {type: GraphQLString},
  },
  resolve: async (
    parent: any, 
    args: { 
      certifier: string; 
      verifier: string; 
      requester: string; 
      name: string; 
      imageURL: string; 
      fee: number;
      index: number; 
      status: string;
    }, 
    context: any
  ) => {
    // const { id, name, league } = args;
    // const _id = Number(id);
    // const club = seedData.findIndex(club => club.id === _id);
		// const update_club = seedData.splice(club, 1, { id: _id, name, league });
    // // console.log(update_club);
    // return update_club;
    // const { imageURL, fee, status } = req.body;
    if (!args.imageURL || !args.fee || !args.status || !args.index) return;

    const documentContract = new ethers.Contract(documentAddress, documentsABI, context.signer);
    const result = await documentContract.updateDocument(args.imageURL, args.index, args.status);
    await result.wait();

    return 'Success';
  }
}

export const deleteDocument = {
  name: "deleteDocument",
	description: "This request deletes a single document",
  type: DocumentType,
  args: { id: { type: GraphQLID } },
  resolve: async (parent: any, args: { id: number; }, context: any) => {
    // const id = Number(args.id);
    // const club = seedData.findIndex(club => club.id === id);
		// const deleted_club = seedData.splice(club, 1);
    // return deleted_club;
    return 'Success';
  }
}

// const RootQuery = new GraphQLObjectType({
// 	name: "RootQuery",
// 	description: "This is the rootquery",
// 	fields: {
// 		clubs,
// 		singleClub
// 	}
// });

// const RootMutation = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {
//     addClub,
//     deleteClub,
//     updateClub
//   }
// });

// export { RootQuery, RootMutation };