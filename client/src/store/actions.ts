import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State, Account, Document, Service } from './state'
import firebase from 'firebase';
import account from '@/services/account';
import service from '@/services/service';
import document from '@/services/document';
import { services, documents } from '../data/data';
import Profile from '@/types/Profile';
import Register from '@/types/Register';
import Login from '@/types/Login';

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

  // auth
  Register = `REGISTER`,
  Login = `LOGIN`,
  Logout = `LOGOUT`,

  // others
  SetProfile = `SET_Profile`,
  SetIsLoading = 'SET_IS_LOADING',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}


export type Actions = {
  // account
  [ActionTypes.AddAccountImage](context: ActionAugments, payload: FormData): void;
  [ActionTypes.AddAccount](context: ActionAugments, payload: Account): void;
  [ActionTypes.GetAccounts](context: ActionAugments): void;
  [ActionTypes.GetAccount](context: ActionAugments, payload: string): void;
  [ActionTypes.UpdateAccount](context: ActionAugments, payload: Account): void;

  // document
  [ActionTypes.AddDocumentImage](context: ActionAugments, payload: FormData): void;
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

  // auth
  [ActionTypes.Register](context: ActionAugments, payload: Register): void;
  [ActionTypes.Login](context: ActionAugments, payload: Login): void;
  [ActionTypes.Logout](context: ActionAugments, payload: Profile): void;

  // others
  [ActionTypes.SetIsLoading](context: ActionAugments, payload: boolean): void;
  [ActionTypes.SetProfile](context: ActionAugments, payload: Profile): void;

}

// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

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
      // TODO: add account
      console.log(payload);
      return;
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await account.addAccount(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetAccounts](context) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await account.getAccounts(context.rootGetters.idToken);
      context.commit(MutationType.SetIsLoading, false)
      if (!Array.isArray(data)) return;
      context.commit(MutationType.SetAccounts, data);
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetAccount](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await account.getAccount(context.getters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      if (typeof data != 'object') return;
      context.commit(MutationType.SetAccount, data);
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.UpdateAccount](context, payload) {
    try {
      // TODO: update account
      console.log(payload);
      // return;
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await account.updateAccount(context.getters.profile.token, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },

  // document
  async [ActionTypes.AddDocumentImage](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      console.log(payload);
      // await sleep(1000);
      const data = await document.addDocumentImage(context.getters.profile.token, payload);
      context.commit(MutationType.SetIsLoading, false)
      if(!data) return;
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.AddDocument](context, payload) {
    try {
      // TODO: add document
      console.log(payload);
      return;
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await document.addDocument(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetDocuments](context) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      // const data = await document.getDocuments(context.rootGetters.idToken);      
      const data = documents;
      context.commit(MutationType.SetIsLoading, false)
      if (!Array.isArray(data)) return;
      context.commit(MutationType.SetDocuments, data);
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetDocument](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await document.getDocument(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      if (typeof data != 'object') return;
      context.commit(MutationType.SetDocument, data);
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.UpdateDocument](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await document.updateDocument(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },
  // service
  async [ActionTypes.AddService](context, payload) {
    try {
      // add service
      console.log(payload);
      return;
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await service.addService(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetServices](context, payload) {
    try {
      console.log(payload);
      context.commit(MutationType.SetIsLoading, true)
      const data = services.find(service => {
        if (service.address == payload) {
          return service.fees;
        }
      });
      console.log(data);
      // const data = await service.getServices(context.rootGetters.idToken);
      context.commit(MutationType.SetIsLoading, false)
      // if (!Array.isArray(data)) return;
      if(!data) return;
      context.commit(MutationType.SetServices, data.fees);
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.GetService](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await service.getService(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      if (typeof data != 'object') return;
      context.commit(MutationType.SetService, data);
      return data;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.UpdateService](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await service.updateService(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error;
    }
  },
  async [ActionTypes.DeleteService](context, payload) {
    try {
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const data = await service.deleteService(context.rootGetters.idToken, payload);
      context.commit(MutationType.SetIsLoading, false)
      return data;
    } catch (error) {
      return error;
    }
  },
  // others
  async [ActionTypes.Register](context, payload) {
    try {
      // TODO: register account
      const { displayName, phoneNumber, photoURL, email, password, role, isActivated } = payload;
      console.log(displayName, phoneNumber, photoURL, email, password, role, isActivated);
      return;
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      // const data = await service.addService(context.rootGetters.idToken, payload);
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (!user) return;
      context.dispatch(ActionTypes.AddAccount, {
        displayName,
        phoneNumber,
        photoURL,
        email,
        role,
        isActivated,
      })
      context.commit(MutationType.SetIsLoading, false)
      return user;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.Login](context, payload) {
    try {
      const { email, password } = payload;
      console.log(email, password);
      return;
      context.commit(MutationType.SetIsLoading, true)
      // await sleep(1000);
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      if(!user) return;
      context.commit(MutationType.SetIsLoading, false)
      return user;
    } catch (error) {
      return error
    }
  },
  async [ActionTypes.Logout](context, payload) {
    context.commit(MutationType.Logout, payload);
  },

  // others
  async [ActionTypes.SetProfile](context, payload) {
    context.commit(MutationType.SetProfile, payload);
  },
  async [ActionTypes.SetIsLoading](context, payload) {
    context.commit(MutationType.SetIsLoading, payload);
  },
}