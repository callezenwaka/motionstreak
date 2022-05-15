import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLObjectType} from 'graphql';

export const Document = new GraphQLObjectType({
  name: "Document",
  description: "This is the document type definition.",
  fields: () => ({
    requester: {type: GraphQLString},
    verifier: {type: GraphQLString},
    certifier: {type: GraphQLString},
    name: {type: GraphQLString},
    imageURL: {type: GraphQLString},
    fee: {type: GraphQLFloat},
    index: {type: GraphQLInt},
    status: {type: GraphQLString},
  })
});