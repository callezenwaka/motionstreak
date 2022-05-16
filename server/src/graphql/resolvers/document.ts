import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import { ClubType } from "./types";
import { seedData } from '../../seedData';

const clubs = {
	name: "Clubs",
	description: "This request gets all club",
	type: new GraphQLList(ClubType),
	resolve: async (parent: any, args: any) => {
		const clubs = seedData;
		return clubs;
	}
};

const singleClub = {
	name: "singleClub",
	description: "This request gets a single club",
	type: ClubType,
	args: { id: { type: GraphQLID } },
	resolve: async (parent: any, args: { id: number; }) => {
    const id = Number(args.id);
		const club = await seedData.find(club => club.id === id);
		return club;
	}
};

const addClub = {
  name: "addClub",
	description: "This requests add a single club",
  type: ClubType,
  args: { name: { type: GraphQLString }, league: { type: GraphQLString } },
  resolve: async (parent: any, args: { name: string; league: string; }) => {
    const new_club = seedData.push({ id: seedData.length + 1, name: args.name, league: args.league });
    // console.log(new_club, ...args);
    return {id: new_club, ...args};
  }
}

const deleteClub = {
  name: "deleteClub",
	description: "This request deletes a single club",
  type: ClubType,
  args: { id: { type: GraphQLID } },
  resolve: async (parent: any, args: { id: number; }) => {
    const id = Number(args.id);
    const club = seedData.findIndex(club => club.id === id);
		const deleted_club = seedData.splice(club, 1);
    return deleted_club;
  }
}

const updateClub = {
  name: "updatelub",
	description: "This request updates a single club",
  type: ClubType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    league: { type: GraphQLString }
  },
  resolve: async (parent: any, args: { id: number; name: any; league: any; }) => {
    const { id, name, league } = args;
    const _id = Number(id);
    const club = seedData.findIndex(club => club.id === _id);
		const update_club = seedData.splice(club, 1, { id: _id, name, league });
    // console.log(update_club);
    return update_club;
  }
}

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	description: "This is the rootquery",
	fields: {
		clubs,
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