export type Account = {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  isTenant: boolean,
  isActive: boolean,
  isActivated: boolean,
  address?: string,
};

export type Document = {
  requester: string;
  verifier: string;
  certifier: string;
  name: string;
  description: string;
  image?: string;
  fee: number;
  index?: number;
  status?: number;
};

export type Certifier = {
  address: string;
  services: Service[];
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
  isTenent: boolean;
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
  idToken: string;
  isLoading: boolean;
};

export const state: State = {
  documents: [],
  document: {} as Document,
  accounts: [],
  account: {} as Account,
  services: [],
  service: {} as Service,
  idToken: '',
  isLoading: false,
};