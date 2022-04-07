interface Document {
  requester: string;
  verifier: string;
  certifier: string;
  name: string;
  description: string;
  image?: string;
  fee: number;
  index?: number;
  status?: number;
}

export default Document;