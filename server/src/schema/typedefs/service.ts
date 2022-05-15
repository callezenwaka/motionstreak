import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLObjectType} from 'graphql';

export const Document = new GraphQLObjectType({
  name: "Service",
  description: "This is the service type definition.",
  fields: () => ({
    name: {type: GraphQLString},
    cost: {type: GraphQLFloat},
    index: {type: GraphQLInt},
  })
});