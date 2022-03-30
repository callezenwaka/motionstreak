interface Document {
  requester: string;
  verifier: string;
  certifier: string;
  name: string;
  description: string;
  image: string;
  fee: number | string;
}

export default Document;