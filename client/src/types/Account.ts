interface Account {
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  email: string;
  password: string;
  entity: string;
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