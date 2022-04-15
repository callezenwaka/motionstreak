import { MutationTree } from 'vuex'
import { State, Account, Document, Service, Profile, Toast } from './state'

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
  SetIdentity = `SET_IDENTITY`,
  SetToast = `SET_TOAST`,
}

export type Mutations = {
  // account
  [MutationType.SetAccounts](state: State, account: Account[]): void;
  [MutationType.SetAccount](state: State, account: Account): void;

  // document
  [MutationType.SetDocuments](state: State, documents: Document[]): void;
  [MutationType.SetDocument](state: State, document: Document): void;

  // service
  [MutationType.SetServices](state: State, services: Service[]): void;
  [MutationType.SetService](state: State, service: Service): void;

  // auth
  [MutationType.Logout](state: State, message: Toast): void;

  // others
  [MutationType.SetProfile](state: State, value: Profile): void;
  [MutationType.SetIsLoading](state: State, value: boolean): void;
  [MutationType.SetIdentity](state: State, value: string): void;
  [MutationType.SetToast](state: State, value: Toast): void;
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
  [MutationType.Logout](state, toast) {
    state.toast = toast;
    state.profile = {
    displayName: '',
    phoneNumber: '',
    photoURL: '',
    email: '',
    role: '',
    isActive: false,
    isActivated: false,
    address: '',
    affiliate: '',
    token: '',
    };
  },

  // others
  [MutationType.SetProfile](state, value) {
    state.profile = value;
  },
  [MutationType.SetIsLoading](state, value) {
    state.isLoading = value;
  },
  [MutationType.SetIdentity](state, value) {
    if (value.toLowerCase() == "Tenant".toLocaleLowerCase()) {
      state.isTenant = true;
    } else if (value.toLowerCase() == "Admin".toLocaleLowerCase()) {
      state.isAdmin = true;
    } else {
      state.isUser = true;
    }
  },
  [MutationType.SetToast](state, value) {
    state.toast = value;
  },
}