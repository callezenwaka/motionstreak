import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import { ServiceType } from "../types/Service";
import { ethers } from 'ethers';
import { serviceAddress, servicesABI } from '../../config';
// import { seedData } from '../../seedData';

const getServices = {
	name: "Services",
	description: "This request gets all services",
	type: new GraphQLList(ServiceType),
	args: { affiliate: { type: GraphQLString } },
	resolve: async (parent: any, args: { affiliate: string; }, context: any) => {
		// const services = seedData;
		// return services;
    if (!args.affiliate) return;
    const servicesContract = new ethers.Contract(serviceAddress, servicesABI, context.req.signer);
    const results = await servicesContract.getServices(args.affiliate);

    // let services:Service[] = [];
    const services =  await Promise.all(results.map(async (result:any) => {
      return {
        name: result.name,
        cost: Number(ethers.utils.formatUnits(result.cost.toString(), 'ether')),
        index: result.index.toNumber(),
      }
    }));

    return services;
	}
};

const getService = {
	name: "Service",
	description: "This request gets a single service",
	type: ServiceType,
	args: { index: { type: GraphQLInt } },
	resolve: async (parent: any, args: { index: number; }, context: any) => {
    // const id = Number(args.id);
		// const service = await seedData.find(service => service.id === id);
		// return service;
    const servicesContract = new ethers.Contract(serviceAddress, servicesABI, context.req.signer);
    const result = await servicesContract.getService(args.index);
	}
};

const addClub = {
  name: "addClub",
	description: "This requests add a single service",
  type: ServiceType,
  args: { name: { type: GraphQLString }, league: { type: GraphQLString } },
  resolve: async (parent: any, args: { name: string; league: string; }) => {
    const new_service = seedData.push({ id: seedData.length + 1, name: args.name, league: args.league });
    // console.log(new_service, ...args);
    return {id: new_service, ...args};
  }
}

const deleteClub = {
  name: "deleteClub",
	description: "This request deletes a single service",
  type: ServiceType,
  args: { id: { type: GraphQLID } },
  resolve: async (parent: any, args: { id: number; }) => {
    const id = Number(args.id);
    const service = seedData.findIndex(service => service.id === id);
		const deleted_service = seedData.splice(service, 1);
    return deleted_service;
  }
}

const updateClub = {
  name: "updatelub",
	description: "This request updates a single service",
  type: ServiceType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    league: { type: GraphQLString }
  },
  resolve: async (parent: any, args: { id: number; name: any; league: any; }) => {
    const { id, name, league } = args;
    const _id = Number(id);
    const service = seedData.findIndex(service => service.id === _id);
		const update_service = seedData.splice(service, 1, { id: _id, name, league });
    // console.log(update_service);
    return update_service;
  }
}

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	description: "This is the rootquery",
	fields: {
		services,
		singleClub
	}
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addClub,
    deleteClub,
    updateClub
  }
});

export { RootQuery, RootMutation };