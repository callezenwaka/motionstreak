// interface Document {
//   name: string;
//   cost: number;
// }

// export default Document;


import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLObjectType} from 'graphql';

export const DocumentType = new GraphQLObjectType({
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