// interface Service {
//   name: string;
//   cost: number;
//   index: number;
// }

// export default Service;

import {GraphQLString, GraphQLInt, GraphQLFloat, GraphQLObjectType} from 'graphql';

export const ServiceType = new GraphQLObjectType({
  name: "Service",
  description: "This is the service type definition.",
  fields: () => ({
    name: {type: GraphQLString},
    cost: {type: GraphQLFloat},
    index: {type: GraphQLInt},
  })
});