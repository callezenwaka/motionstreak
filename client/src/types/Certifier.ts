interface Fee {
  name: string;
  cost: number;
}

interface Certifier {
  address: string;
  fees: Fee[];
}

export default Certifier;