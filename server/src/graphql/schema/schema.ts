// Import required stuff from graphql
import { GraphQLSchema, GraphQLObjectType } from "graphql";

// Import resolvers
import { Account, addAccount, updateAccount } from "../resolvers/account";
import { Services, Service, addService, updateService, deleteService } from "../resolvers/service";

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { 
    Account,
    Services,
    Service,
  },
})

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    addAccount,
    updateAccount,
    addService,
    updateService,
    deleteService,
  },
})

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})