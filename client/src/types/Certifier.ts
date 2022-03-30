interface Fee {
  doc: string;
  description: string;
  cost: number;
}

interface Certifier {
  address: string;
  fees: Fee[];
}

export default Certifier;