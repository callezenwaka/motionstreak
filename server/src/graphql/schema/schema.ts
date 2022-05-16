// Import required stuff from graphql
import { GraphQLSchema, GraphQLObjectType } from "graphql";

// Import resolvers
import { getAccount, addAccount, updateAccount } from "../resolvers/account";

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { 
    getAccount 
  },
})

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    addAccount,
    updateAccount,
  },
})

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})