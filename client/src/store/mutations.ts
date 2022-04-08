import { MutationTree } from 'vuex'
import { State, Account, Document, Service, Profile } from './state'

export enum MutationType {
  // account
  // AddAccount = `ADD_ACCOUNT`,
  SetAccounts = `SET_ACCOUNTS`,
  SetAccount = `SET_ACCOUNT`,
  // UpdateAccount = `UPDATE_ACCOUNT`,

  // document
  // AddDocument = `ADD_DOCUMENT`,
  SetDocuments = `SET_DOCUMENTS`,
  SetDocument = `SET_DOCUMENT`,
  // EditDocument = 'EDIT_DOCUMENT',
  // UpdateDocument = `UPDATE_DOCUMENT`,

  // service
  // AddService = `ADD_SERVICE`,
  SetServices = `SET_SERVICES`,
  SetService = `SET_SERVICE`,
  // EditService = 'EDIT_SERVICE',
  // UpdateService = `UPDATE_SERVICE`,
  // DeleteService = `DELETE_SERVICE`,

  // auth
  Logout = `LOGOUT`,

  // others
  SetProfile = `SET_PROFILE`,
  SetIsLoading = `SET_IS_LOADING`,
}

export type Mutations = {
  // account
  // [MutationType.AddAccount](state: State, account: Account): void;
  [MutationType.SetAccounts](state: State, account: Account[]): void;
  [MutationType.SetAccount](state: State, account: Account): void;
  // [MutationType.UpdateAccount](state: State, account: Account): void;

  // document
  // [MutationType.AddDocument](state: State, document: Document): void;
  [MutationType.SetDocuments](state: State, documents: Document[]): void;
  [MutationType.SetDocument](state: State, document: Document): void;
  // [MutationType.EditDocument](
  //   state: State,
  //   document: Partial<Document> & { index: number }
  // ): void;
  // [MutationType.UpdateDocument](state: State, document: Document): void;

  // service
  // [MutationType.AddService](state: State, service: Service): void;
  [MutationType.SetServices](state: State, services: Service[]): void;
  [MutationType.SetService](state: State, service: Service): void;
  // [MutationType.EditService](
  //   state: State,
  //   service: Partial<Service> & { index: number }
  // ): void;
  // [MutationType.UpdateService](state: State, service: Service): void;
  // [MutationType.DeleteService](
  //   state: State,
  //   service: Partial<Service> & { index: number }
  // ): void;

  // auth
  [MutationType.Logout](state: State, value: Profile): void;

  // others
  [MutationType.SetProfile](state: State, value: Profile): void;
  [MutationType.SetIsLoading](state: State, value: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  // account
  [MutationType.SetAccounts](state, accounts) {
    state.accounts = accounts;
  },
  [MutationType.SetAccount](state, account) {
    state.account = account;
  },

  // document
  [MutationType.SetDocuments](state, documents) {
    state.documents = documents;
  },
  [MutationType.SetDocument](state, document) {
    state.document = document;
  },

  // service
  [MutationType.SetServices](state, services) {
    state.services = services;
  },
  [MutationType.SetService](state, service) {
    state.service = service;
  },

  // auth 
  [MutationType.Logout](state, value) {
    state.profile = value;
  },

  // others
  [MutationType.SetProfile](state, value) {
    state.profile = value;
  },
  [MutationType.SetIsLoading](state, value) {
    state.isLoading = value;
  },
}