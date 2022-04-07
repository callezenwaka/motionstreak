import { MutationTree } from 'vuex'
import { State, Account, Document, Service } from './state'

export enum MutationType {
  AddAccount = `ADD_ACCOUNT`,
  SetAccount = `SET_ACCOUNT`,
  UpdateAccount = `UPDATE_ACCOUNT`,

  AddDocument = `ADD_DOCUMENT`,
  SetDocuments = `SET_DOCUMENTS`,
  SetDocument = `SET_DOCUMENT`,
  EditDocument = 'EDIT_DOCUMENT',
  UpdateDocument = `UPDATE_DOCUMENT`,

  AddService = `ADD_SERVICE`,
  SetServices = `SET_SERVICES`,
  SetService = `SET_SERVICE`,
  EditService = 'EDIT_SERVICE',
  UpdateService = `UPDATE_SERVICE`,
  DeleteService = `DELETE_SERVICE`,

  SetIsLoading = 'SET_IS_LOADING',
  SetIdToken = 'SET_ID_TOKEN',
}

export type Mutations = {

  [MutationType.AddAccount](state: State, account: Account): void;
  [MutationType.SetAccount](state: State, account: Account): void;
  [MutationType.UpdateAccount](state: State, account: Account): void;

  [MutationType.AddDocument](state: State, document: Document): void;
  [MutationType.SetDocuments](state: State, documents: Document[]): void;
  [MutationType.SetDocument](state: State, document: Document): void;
  [MutationType.EditDocument](
    state: State,
    document: Partial<Document> & { index: number }
  ): void;
  [MutationType.UpdateDocument](state: State, document: Document): void;

  [MutationType.AddService](state: State, document: Document): void;
  [MutationType.SetServices](state: State, documents: Document[]): void;
  [MutationType.SetService](state: State, document: Document): void;
  [MutationType.EditService](
    state: State,
    service: Partial<Service> & { index: number }
  ): void;
  [MutationType.UpdateService](state: State, document: Document): void;
  [MutationType.DeleteService](
    state: State,
    service: Partial<Service> & { index: number }
  ): void;

  [MutationType.SetIsLoading](state: State, value: boolean): void;
  [MutationType.SetIdToken](state: State, value: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateTask](state, task) {
    state.tasks.unshift(task)
  },
  [MutationType.SetTasks](state, tasks) {
    state.tasks = tasks
  },
  [MutationType.CompleteTask](state, newTask) {
    const task = state.tasks.findIndex(element => element.id === newTask.id)
    if (task === -1) return
    state.tasks[task] = { ...state.tasks[task], ...newTask }
  },
  [MutationType.RemoveTask](state, Task) {
    const task = state.tasks.findIndex(element => element.id === Task.id)
    if (task === -1) return
    //If Task exist in the state, remove it
    state.tasks.splice(task, 1) 
  },
  [MutationType.EditTask](state, Task) {
    const task = state.tasks.findIndex(element => element.id === Task.id)
    if (task === -1) return
    //If Task exist in the state, toggle the editing property
    state.tasks[task] = { ...state.tasks[task], editing: !state.tasks[task].editing } 
    console.log("taskino", state.tasks[task])
  },
  [MutationType.UpdateTask](state, Task) {
    state.tasks = state.tasks.map(task => {
      if(task.id === Task.id) {
        return {...task, ...Task}
      }
      return task;
    })
  },

  [MutationType.SetIsLoading](state, value) {
    state.isLoading = value;
  },
  [MutationType.SetIdToken](state, value) {
    state.idToken = value;
  },
}