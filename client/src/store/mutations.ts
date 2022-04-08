import { MutationTree } from 'vuex'
import { State, Account, Document, Service } from './state'

export enum MutationType {
  // AddAccount = `ADD_ACCOUNT`,
  SetAccounts = `SET_ACCOUNTS`,
  SetAccount = `SET_ACCOUNT`,
  // UpdateAccount = `UPDATE_ACCOUNT`,

  // AddDocument = `ADD_DOCUMENT`,
  SetDocuments = `SET_DOCUMENTS`,
  SetDocument = `SET_DOCUMENT`,
  // EditDocument = 'EDIT_DOCUMENT',
  // UpdateDocument = `UPDATE_DOCUMENT`,

  // AddService = `ADD_SERVICE`,
  SetServices = `SET_SERVICES`,
  SetService = `SET_SERVICE`,
  // EditService = 'EDIT_SERVICE',
  // UpdateService = `UPDATE_SERVICE`,
  // DeleteService = `DELETE_SERVICE`,

  SetIsLoading = 'SET_IS_LOADING',
  SetIdToken = 'SET_ID_TOKEN',
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

  [MutationType.SetIsLoading](state: State, value: boolean): void;
  [MutationType.SetIdToken](state: State, value: string): void;
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

  // others
  [MutationType.SetIsLoading](state, value) {
    state.isLoading = value;
  },
  [MutationType.SetIdToken](state, value) {
    state.idToken = value;
  },
}