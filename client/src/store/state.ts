export const imageURL = `https://i.pinimg.com/736x/8a/8d/e9/8a8de9aa2e54526fecb40182e510e856.jpg`;
export const photoURL = `https://ipfs.infura.io/ipfs/QmUHa9QV34uPdJ1JZ5XqcQgn5jfmW3SxUnt3yoFfHu8Sow`;

export type Profile = {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  role: string;
  isActive: boolean;
  isActivated: boolean;
  address: string;
  token: string;
  affiliate: string;
}

export type Account = {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  role: string;
  isActive: boolean;
  isActivated: boolean;
  address?: string;
  affiliate?: string;
  password?: string;
};

export type Document = {
  requester: string;
  verifier: string;
  certifier: string;
  name: string;
  imageURL?: string;
  fee: number;
  index?: number;
  status?: number;
};

export type Service = {
  name: string;
  cost: number;
  index?: number;
};

export type Register = {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  password: string;
  role: string;
  isActivated: boolean;
};

export type Login = {
  email: string;
  password: string;
};

export type State = {
  documents: Document[];
  document: Document;
  accounts: Account[];
  account: Account;
  services: Service[];
  service: Service;
  profile: Profile;
  isLoading: boolean;
};

export const state: State = {
  documents: [],
  document: {
    // requester: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
		// certifier: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		// verifier: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		// name: 'Certificate',
		// imageURL: imageURL,
		// fee: 0.25,
		// index: 0,
		// status: 0,
  } as Document,
  accounts: [],
  account: {} as Account,
  services: [],
  service: {} as Service,
  profile: {} as Profile,
  isLoading: false,
};
// displayName: 'Admin One',
// phoneNumber: '+2348030003000',
// photoURL: photoURL,
// email: 'admin.one@mail.com',
// role: 'admin',
// isActive: true,
// isActivated: true,
// address: '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
// affiliate: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
// token: 'ej0xbDA5747bFD65F08deb54cb465eB87D40e51B197E0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',