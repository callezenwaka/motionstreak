import { GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLObjectType, GraphQLScalarType } from 'graphql';
// import { GraphQLObjectType, GraphQLID, GraphQLString,GraphQLBoolean,GraphQLInt,GraphQLScalarType, GraphQLList } from "graphql";

export const FileResponseType = new GraphQLObjectType({
  name: "FileUploadResponse",
  fields: () => {
    return ({
      success: { type: GraphQLBoolean },
      message: { type: GraphQLString },
      errorStatus: { type: GraphQLBoolean },
      error: { type: GraphQLString },
      token: { type: GraphQLString },
    });
  },
});

export const FileRequestType = new GraphQLScalarType({
  name: 'FileRequestType',
  description: "This is the file type definition.",
  serialize: (file: any) => file,
  parseValue: (file: any) => file,
  parseLiteral(file) {
    return file;
  }
});

export const MetricsType = new GraphQLObjectType({
  name: "Metrics",
  description: "This is the metrics type definition.",
  fields: () => ({
    pending: { type: GraphQLInt },
    certified: { type: GraphQLInt },
    declined: { type: GraphQLInt },
    verified: { type: GraphQLInt },
    rejected: { type: GraphQLInt },
    total: { type: GraphQLInt },
  })
});

export const AvatarType = new GraphQLObjectType({
  name: "Avatar",
  description: "This is the avatar type definition.",
  fields: () => ({
    pending: { type: GraphQLInt },
    certified: { type: GraphQLInt },
    declined: { type: GraphQLInt },
    verified: { type: GraphQLInt },
    rejected: { type: GraphQLInt },
    total: { type: GraphQLInt },
  })
});

// export const FileType = new GraphQLObjectType({
//   name: "File",
//   description: "This is the file type definition.",
//   fields: () => ({
//     pending: { type: GraphQLInt },
//     certified: { type: GraphQLInt },
//     declined: { type: GraphQLInt },
//     verified: { type: GraphQLInt },
//     rejected: { type: GraphQLInt },
//     total: { type: GraphQLInt },
//   })
// });