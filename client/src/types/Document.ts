interface Document {
  requester: string;
  verifier: string;
  certifier: string;
  name: string;
  imageURL?: string;
  fee: number;
  index?: number;
  status?: number;
}

export default Document;