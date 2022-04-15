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
  address?: string | undefined;
  affiliate?: string;
  password?: string;
  uid?: string;
};

export type Document = {
  requester: string;
  verifier: string;
  certifier: string;
  name: string;
  imageURL?: string;
  fee: number;
  index?: number;
  status: number;
};

export type Service = {
  name: string;
  cost: number;
  index: number;
};

export type Query = {
  affiliate: string;
}

export type Register = {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  isActivated: boolean;
};

export type Login = {
  email: string;
  password: string;
};

export type Toast = {
  title: string;
  text: string;
  status: boolean;
}

export type State = {
  documents: Document[];
  document: Document;
  accounts: Account[];
  account: Account;
  services: Service[];
  service: Service;
  profile: Profile;
  isLoading: boolean;
  toast: Toast;
  isTenant: boolean
  isAdmin: boolean;
  isUser: boolean;
};

export const state: State = {
  documents: [],
  document: {} as Document,
  accounts: [],
  account: {} as Account,
  services: [],
  service: {} as Service,
  profile: {} as Profile,
  isLoading: false,
  toast: {} as Toast,
  isTenant: false,
  isAdmin: false,
  isUser: false,
};
