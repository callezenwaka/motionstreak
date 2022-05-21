import { GraphQLString } from 'graphql';
import { MetricsType, FileRequestType, FileResponseType } from "../types/Helper";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { documentAddress, documentsABI } from '../../config';


interface IFormParams {
  file: any,
}

export const Metrics = {
  name: "Metrics",
  description: "This request gets all metrics",
  type: MetricsType,
  args: { address: { type: GraphQLString } },
  resolve: async (parent: any, args: { address?: string; }, context: any) => {
    // const id = Number(args.id);
    // const club = await seedData.find(club => club.id === id);
    // return club;
    if (!args.address) return;
    const documentContract = new ethers.Contract(documentAddress, documentsABI, context.signer);
    const result = await documentContract.getMetrics(args.address);

    const metrics = {
      pending: Number(result[0]),
      certified: Number(result[1]),
      declined: Number(result[2]),
      verified: Number(result[3]),
      rejected: Number(result[4]),
      total: Number(result[5]),
    }

    return metrics;
  }
};

export const Avatar: any = {
  name: "Avatar",
  description: "This request adds a single avatar",
  type: FileResponseType,
  args: {
    file: { type: FileRequestType }
  },
  async resolve(parent: any, args: IFormParams, context: any) {
    try {
      const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
      const { createReadStream, filename, mimetype } = await args.file.file;
      const stream = createReadStream();
      console.log(args.file);
      console.log(filename);
      // const uniqueName:string =  fileRenamer(filename);
      // const pathName = path.join(__dirname, '../../files/'+uniqueName);
      // await stream.pipe(fs.createWriteStream(pathName));
      return {
          success:true,
          message:'file uploaded successfully'
      }
      // const result = await client.add(Buffer.from(args.file.file.buffer));
      // const imageURL = `https://ipfs.infura.io/ipfs/${result.path}`;
    } catch (error) {
      console.info(error);
    }
  }
}

// export const File = {
//   name: "File",
//   description: "This request adds a single file",
//   type: FileResponseType,
//   args: {
//     imageURL: { type: GraphQLString },
//   },
//   resolve: async (
//     parent: any,
//     args: { imageURL: string; },
//     context: any
//   ) => {
//     // const new_club = seedData.push({ id: seedData.length + 1, name: args.name, league: args.league });
//     // // console.log(new_club, ...args);
//     // return {id: new_club, ...args};
//     if (!args.imageURL) return;

//     const documentContract = new ethers.Contract(documentAddress, documentsABI, context.signer);
//     const result = await documentContract.addDocument(args.imageURL);
//     await result.wait();

//     return 'Success';
//   }
// }

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