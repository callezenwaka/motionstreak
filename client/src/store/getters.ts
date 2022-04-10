import { GetterTree } from 'vuex'
import { State, Account, Document, Service, Profile } from './state'

export type Getters = {
  account(state: State): Account;
  accounts(state: State): Account[];
  getAccountByAddress(state: State): (address: string) => Account | undefined;
  service(state: State): Service;
  services(state: State): Service[];
  getServiceByIndex(state: State): (index: number) => Service | undefined;
  document(state: State): Document;
  documents(state: State): Document[];
  getDocumentByIndex(state: State): (index: number) => Document | undefined;
  getDocumentCount(state: State): number;
  profile(state: State): Profile;
  isLoading(state: State): boolean;
  isTenant(state: State): boolean;
  isAdmin(state: State): boolean;
  isUser(state: State): boolean;
}

export const getters: GetterTree<State, State> & Getters = {
  account(state) { return state.account },
  accounts(state) { return state.accounts },
  getAccountByAddress: (state) => (address: string) => {
    return state.accounts.find(account => account.address === address)
  },
  service(state) { return state.service },
  services(state) { return state.services },
  getServiceByIndex: (state) => (index: number) => {
    return state.services.find(service => service.index === index)
  },
  document(state) { return state.document },
  // documents(state) { return state.documents },
  documents: (state) => { 
    return state.documents.filter(document => {
      if (state.profile.affiliate == document.certifier) {
        return document;
      }
      if (state.profile.affiliate == document.verifier) {
        return document;
      }
      if (state.profile.affiliate == document.requester) {
        return document;
      }
    })
  },
  getDocumentByIndex: (state) => (index: number) => {
    return state.documents.find(document => document.index === index)
  },
  getDocumentCount(state) {
    return state.documents.length
  },
  profile(state) { return state.profile },
  isLoading(state) { return state.isLoading },
  // isTenant: (state) => {
  //   const role = "Tenant".toLowerCase();
  //   console.log(state.profile.role, )
  //   return (state.profile.role == role)? true : false 
  // },
  isTenant(state) { return state.profile.role.toLowerCase() == "Tenant".toLowerCase()? true : false },
  isAdmin(state) { return state.profile.role.toLowerCase() == "Admin".toLowerCase()? true : false },
  isUser(state) { return state.profile.role.toLowerCase() == "User".toLowerCase()? true : false },
}