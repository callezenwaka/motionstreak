interface Account {
  address: string;
  itemId?: number;
  description: string;
  image: string;
  name: string;
  owner?: string;
  seller?: string;
  price: string;
  tokenId: number;
  sold?: boolean;
}

export default Account;

// struct Account {
//   string name;
//   string email;
//   string avatar;
//   address affiliate;
//   string description;
//   string entity;
//   Fee[] fees;
// }

// struct Fee {
//   string doc;
//   uint cost;
// }