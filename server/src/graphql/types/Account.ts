// interface Account {
//   displayName: string;
//   phoneNumber: string;
//   email: string;
//   role: string;  
//   affiliate: string,
//   isActive: boolean;
//   isActivated: boolean;
// }

// export default Account;

import { GraphQLString, GraphQLBoolean, GraphQLObjectType } from 'graphql';

export const AccountType = new GraphQLObjectType({
  name: "Account",
  description: "This is the account type definition.",
  fields: () => ({
    address: {type: GraphQLString},
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