import {GraphQLString, GraphQLBoolean, GraphQLObjectType} from 'graphql';

export const Account = new GraphQLObjectType({
  name: "Account",
  description: "This is the account type definition.",
  fields: () => ({
    displayName: {type: GraphQLString},
    phoneNumber: {type: GraphQLString},
    email: {type: GraphQLString},
    photoURL: {type: GraphQLString},
    role: {type: GraphQLString},
    affiliate: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    isActivated: {type: GraphQLBoolean},
  })
});