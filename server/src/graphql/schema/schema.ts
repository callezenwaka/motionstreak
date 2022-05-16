// Import required stuff from graphql
import { GraphQLSchema, GraphQLObjectType } from "graphql";

// Import resolvers
import { Metrics, Avatar } from "../resolvers/helper";
import { Account, addAccount, updateAccount } from "../resolvers/account";
import { Services, Service, addService, updateService, deleteService } from "../resolvers/service";
import { Documents, Document, addDocument, updateDocument, deleteDocument } from "../resolvers/document";

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { 
    Metrics,
    Account,
    Services,
    Service,
    Documents,
    Document,
  },
})

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    Avatar,
    addAccount,
    updateAccount,
    addService,
    updateService,
    deleteService,
    addDocument,
    updateDocument,
    deleteDocument,
  },
})

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})