import { GetterTree } from 'vuex'
import { State, Account, Document, Service } from './state'

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
  idToken(state: State): string;
  isLoading(state: State): boolean;
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
  documents(state) { return state.documents },
  getDocumentByIndex: (state) => (index: number) => {
    return state.documents.find(document => document.index === index)
  },
  idToken(state) { return state.idToken },
  isLoading(state) { return state.isLoading },
}