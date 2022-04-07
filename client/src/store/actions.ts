import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State, Account, Document, Service } from './state'
import account from '@/services/account';

export enum ActionTypes {
  // account
  AddAccountImage = `ADD_ACCOUNT_IMAGE`,
  AddAccount = `ADD_ACCOUNT`,
  GetAccounts = `GET_ACCOUNTS`,
  GetAccount = `GET_ACCOUNT`,
  UpdateAccount = `UPDATE_ACCOUNT`,

  // document
  AddDocumentImage = `ADD_DOCUMENT_IMAGE`,
  AddDocument = `ADD_DOCUMENT`,
  GetDocuments = `GET_DOCUMENTS`,
  GetDocument = `GET_DOCUMENT`,
  UpdateDocument = `UPDATE_DOCUMENT`,

  // serivice
  AddService = `ADD_SERVICE`,
  GetServices = `GET_SERVICES`,
  GetService = `GET_SERVICE`,
  UpdateService = `UPDATE_SERVICE`,
  DeleteService = `DELETE_SERVICE`,

  // others
  SetIsLoading = 'SET_IS_LOADING',
  SetIdToken = 'SET_ID_TOKEN'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}


export type Actions = {
  // account
  [ActionTypes.AddAccountImage](context: ActionAugments, payload: File): void;
  [ActionTypes.AddAccount](context: ActionAugments, payload: Account): void;
  [ActionTypes.GetAccounts](context: ActionAugments, payload: string): void;
  [ActionTypes.GetAccount](context: ActionAugments, payload: string): void;
  [ActionTypes.UpdateAccount](context: ActionAugments, payload: Account): void;

  // document
  [ActionTypes.AddDocumentImage](context: ActionAugments, payload: File): void;
  [ActionTypes.AddDocument](context: ActionAugments, payload: Document): void;
  [ActionTypes.GetDocuments](context: ActionAugments, payload: string): void;
  [ActionTypes.GetDocument](context: ActionAugments, payload: number): void;
  [ActionTypes.UpdateDocument](context: ActionAugments, payload: Document): void;

  // service
  [ActionTypes.AddService](context: ActionAugments, payload: Service): void;
  [ActionTypes.GetServices](context: ActionAugments, payload: string): void;
  [ActionTypes.GetService](context: ActionAugments, payload: number): void;
  [ActionTypes.UpdateService](context: ActionAugments, payload: Service): void;
  [ActionTypes.DeleteService](context: ActionAugments, payload: number): void;

  // others
  [ActionTypes.SetIsLoading](context: ActionAugments): void;
  [ActionTypes.SetIdToken](context: ActionAugments): void;

}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  // account
  async [ActionTypes.AddAccountImage](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await account.addAccountImage(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.AddAccount](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await account.addAccount(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetTaskItems]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1000)

    commit(MutationType.SetLoading, false)
    commit(MutationType.SetTasks, [
      {
        id: 1,
        title: 'Create a new programming language',
        description: "The programing language should have full typescript support ",
        createdBy: "Emmanuel John",
        assignedTo: "Saviour Peter",
        completed: false,
        editing: false

      }
    ])
  },

  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true)
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, {showModal: true, taskId: 1})
  }
}