import { gql } from "@apollo/client";

export const AVATAR= gql`
  mutation Avatar($file: FileRequest!) {
    Avatar(file: $file,) {
      success,
      message,
      errorStatus,
      error
    }
  }
`;

// export const MULTIPLE_FILE_UPLOAD=gql`
// mutation multipleFileUpload(
//   $file: [Uploads!]!
// ) {
//   multipleFileUpload(
//     file: $file,
//   ) {
//      success,message,errorStatus,error,token
//   }
// }
// `;