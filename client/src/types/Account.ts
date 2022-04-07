interface Account {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  isTenant: boolean,
  isActive: boolean,
  isActivated: boolean,
  address?: string,
}

export default Account;