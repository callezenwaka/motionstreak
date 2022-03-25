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
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Accounts {
  export type FeeStruct = { doc: string; cost: BigNumberish };

  export type FeeStructOutput = [string, BigNumber] & {
    doc: string;
    cost: BigNumber;
  };

  export type AccountStruct = {
    name: string;
    email: string;
    avatar: string;
    affiliate: string;
    description: string;
    entity: string;
    fees: Accounts.FeeStruct[];
  };

  export type AccountStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    Accounts.FeeStructOutput[]
  ] & {
    name: string;
    email: string;
    avatar: string;
    affiliate: string;
    description: string;
    entity: string;
    fees: Accounts.FeeStructOutput[];
  };
}

export interface AccountsInterface extends utils.Interface {
  contractName: "Accounts";
  functions: {
    "accounts(address)": FunctionFragment;
    "addFee((string,uint256))": FunctionFragment;
    "deleteFee(uint256)": FunctionFragment;
    "getAccount(address)": FunctionFragment;
    "getAffiliate(address)": FunctionFragment;
    "getFee(uint256)": FunctionFragment;
    "getFees()": FunctionFragment;
    "kill()": FunctionFragment;
    "register(string,string,string,address,string,string,(string,uint256))": FunctionFragment;
    "updateFee((string,uint256),uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "accounts", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addFee",
    values: [Accounts.FeeStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getAccount", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getAffiliate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getFees", values?: undefined): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string, string, string, string, string, Accounts.FeeStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFee",
    values: [Accounts.FeeStruct, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deleteFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAccount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAffiliate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateFee", data: BytesLike): Result;

  events: {
    "Registered(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
}

export type RegisteredEvent = TypedEvent<[string], { user: string }>;

export type RegisteredEventFilter = TypedEventFilter<RegisteredEvent>;

export interface Accounts extends BaseContract {
  contractName: "Accounts";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountsInterface;

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
    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string] & {
        name: string;
        email: string;
        avatar: string;
        affiliate: string;
        description: string;
        entity: string;
      }
    >;

    addFee(
      _fee: Accounts.FeeStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteFee(
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccount(
      _address: string,
      overrides?: CallOverrides
    ): Promise<
      [Accounts.AccountStructOutput] & {
        _account: Accounts.AccountStructOutput;
      }
    >;

    getAffiliate(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[string] & { affiliate: string }>;

    getFee(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Accounts.FeeStructOutput] & { fee: Accounts.FeeStructOutput }>;

    getFees(
      overrides?: CallOverrides
    ): Promise<
      [Accounts.FeeStructOutput[]] & { fees: Accounts.FeeStructOutput[] }
    >;

    kill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register(
      _name: string,
      _email: string,
      _avatar: string,
      _affiliate: string,
      _description: string,
      _entity: string,
      _fee: Accounts.FeeStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFee(
      _fee: Accounts.FeeStruct,
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accounts(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string] & {
      name: string;
      email: string;
      avatar: string;
      affiliate: string;
      description: string;
      entity: string;
    }
  >;

  addFee(
    _fee: Accounts.FeeStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteFee(
    _index: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccount(
    _address: string,
    overrides?: CallOverrides
  ): Promise<Accounts.AccountStructOutput>;

  getAffiliate(_address: string, overrides?: CallOverrides): Promise<string>;

  getFee(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Accounts.FeeStructOutput>;

  getFees(overrides?: CallOverrides): Promise<Accounts.FeeStructOutput[]>;

  kill(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register(
    _name: string,
    _email: string,
    _avatar: string,
    _affiliate: string,
    _description: string,
    _entity: string,
    _fee: Accounts.FeeStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFee(
    _fee: Accounts.FeeStruct,
    _index: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string] & {
        name: string;
        email: string;
        avatar: string;
        affiliate: string;
        description: string;
        entity: string;
      }
    >;

    addFee(_fee: Accounts.FeeStruct, overrides?: CallOverrides): Promise<void>;

    deleteFee(_index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getAccount(
      _address: string,
      overrides?: CallOverrides
    ): Promise<Accounts.AccountStructOutput>;

    getAffiliate(_address: string, overrides?: CallOverrides): Promise<string>;

    getFee(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Accounts.FeeStructOutput>;

    getFees(overrides?: CallOverrides): Promise<Accounts.FeeStructOutput[]>;

    kill(overrides?: CallOverrides): Promise<void>;

    register(
      _name: string,
      _email: string,
      _avatar: string,
      _affiliate: string,
      _description: string,
      _entity: string,
      _fee: Accounts.FeeStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFee(
      _fee: Accounts.FeeStruct,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Registered(address)"(user?: null): RegisteredEventFilter;
    Registered(user?: null): RegisteredEventFilter;
  };

  estimateGas: {
    accounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    addFee(
      _fee: Accounts.FeeStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteFee(
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccount(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAffiliate(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFee(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getFees(overrides?: CallOverrides): Promise<BigNumber>;

    kill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register(
      _name: string,
      _email: string,
      _avatar: string,
      _affiliate: string,
      _description: string,
      _entity: string,
      _fee: Accounts.FeeStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFee(
      _fee: Accounts.FeeStruct,
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addFee(
      _fee: Accounts.FeeStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteFee(
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccount(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAffiliate(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFee(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register(
      _name: string,
      _email: string,
      _avatar: string,
      _affiliate: string,
      _description: string,
      _entity: string,
      _fee: Accounts.FeeStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFee(
      _fee: Accounts.FeeStruct,
      _index: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
