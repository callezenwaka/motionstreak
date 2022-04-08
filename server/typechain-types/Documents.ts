/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Documents {
  export type DocumentStruct = {
    requester: string;
    verifier: string;
    certifier: string;
    name: string;
    description: string;
    imageURL: string;
    fee: BigNumberish;
    index: BigNumberish;
    status: BigNumberish;
  };

  export type DocumentStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number
  ] & {
    requester: string;
    verifier: string;
    certifier: string;
    name: string;
    description: string;
    imageURL: string;
    fee: BigNumber;
    index: BigNumber;
    status: number;
  };
}

export interface DocumentsInterface extends utils.Interface {
  contractName: "Documents";
  functions: {
    "accountsAddress()": FunctionFragment;
    "addDocument(address,address,string,string,uint256)": FunctionFragment;
    "balances(address)": FunctionFragment;
    "getDocument(uint256)": FunctionFragment;
    "getDocuments(address)": FunctionFragment;
    "getTotal(address)": FunctionFragment;
    "kill()": FunctionFragment;
    "updateDocument(string,uint256,uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountsAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addDocument",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getDocument",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDocuments",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getTotal", values: [string]): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateDocument",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountsAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDocument",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDocument",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDocuments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTotal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDocument",
    data: BytesLike
  ): Result;

  events: {
    "DocumentAdded(address)": EventFragment;
    "DocumentCertified(address)": EventFragment;
    "DocumentRejected(address)": EventFragment;
    "DocumentTested(uint256)": EventFragment;
    "DocumentVerified(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DocumentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DocumentCertified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DocumentRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DocumentTested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DocumentVerified"): EventFragment;
}

export type DocumentAddedEvent = TypedEvent<[string], { user: string }>;

export type DocumentAddedEventFilter = TypedEventFilter<DocumentAddedEvent>;

export type DocumentCertifiedEvent = TypedEvent<[string], { user: string }>;

export type DocumentCertifiedEventFilter =
  TypedEventFilter<DocumentCertifiedEvent>;

export type DocumentRejectedEvent = TypedEvent<[string], { user: string }>;

export type DocumentRejectedEventFilter =
  TypedEventFilter<DocumentRejectedEvent>;

export type DocumentTestedEvent = TypedEvent<[BigNumber], { test: BigNumber }>;

export type DocumentTestedEventFilter = TypedEventFilter<DocumentTestedEvent>;

export type DocumentVerifiedEvent = TypedEvent<[string], { user: string }>;

export type DocumentVerifiedEventFilter =
  TypedEventFilter<DocumentVerifiedEvent>;

export interface Documents extends BaseContract {
  contractName: "Documents";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DocumentsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accountsAddress(overrides?: CallOverrides): Promise<[string]>;

    addDocument(
      _certifier: string,
      _verifier: string,
      _name: string,
      _description: string,
      _fee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getDocument(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Documents.DocumentStructOutput]>;

    getDocuments(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[Documents.DocumentStructOutput[]]>;

    getTotal(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDocument(
      _imageURL: string,
      _index: BigNumberish,
      _fee: BigNumberish,
      status: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accountsAddress(overrides?: CallOverrides): Promise<string>;

  addDocument(
    _certifier: string,
    _verifier: string,
    _name: string,
    _description: string,
    _fee: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  getDocument(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Documents.DocumentStructOutput>;

  getDocuments(
    _address: string,
    overrides?: CallOverrides
  ): Promise<Documents.DocumentStructOutput[]>;

  getTotal(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  kill(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDocument(
    _imageURL: string,
    _index: BigNumberish,
    _fee: BigNumberish,
    status: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accountsAddress(overrides?: CallOverrides): Promise<string>;

    addDocument(
      _certifier: string,
      _verifier: string,
      _name: string,
      _description: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getDocument(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Documents.DocumentStructOutput>;

    getDocuments(
      _address: string,
      overrides?: CallOverrides
    ): Promise<Documents.DocumentStructOutput[]>;

    getTotal(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    kill(overrides?: CallOverrides): Promise<void>;

    updateDocument(
      _imageURL: string,
      _index: BigNumberish,
      _fee: BigNumberish,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DocumentAdded(address)"(user?: null): DocumentAddedEventFilter;
    DocumentAdded(user?: null): DocumentAddedEventFilter;

    "DocumentCertified(address)"(user?: null): DocumentCertifiedEventFilter;
    DocumentCertified(user?: null): DocumentCertifiedEventFilter;

    "DocumentRejected(address)"(user?: null): DocumentRejectedEventFilter;
    DocumentRejected(user?: null): DocumentRejectedEventFilter;

    "DocumentTested(uint256)"(test?: null): DocumentTestedEventFilter;
    DocumentTested(test?: null): DocumentTestedEventFilter;

    "DocumentVerified(address)"(user?: null): DocumentVerifiedEventFilter;
    DocumentVerified(user?: null): DocumentVerifiedEventFilter;
  };

  estimateGas: {
    accountsAddress(overrides?: CallOverrides): Promise<BigNumber>;

    addDocument(
      _certifier: string,
      _verifier: string,
      _name: string,
      _description: string,
      _fee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getDocument(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDocuments(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotal(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDocument(
      _imageURL: string,
      _index: BigNumberish,
      _fee: BigNumberish,
      status: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountsAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addDocument(
      _certifier: string,
      _verifier: string,
      _name: string,
      _description: string,
      _fee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDocument(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDocuments(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotal(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDocument(
      _imageURL: string,
      _index: BigNumberish,
      _fee: BigNumberish,
      status: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
