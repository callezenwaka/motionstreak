// SPDX-License-Identifier: GPL-3.0
// https://docs.soliditylang.org/en/v0.5.4/types.html#structs

pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "./EmailRegex.sol";
import "./StringUtils.sol";

/** @title Accounts. */
contract Accounts {
  address private owner;
  mapping (address => Account) public accounts;

  struct Account {
    string name;
    string email;
    string avatar;
    address affiliate;
    string description;
    string entity;
    Fee[] fees;
  }

  struct Fee {
    string doc;
    uint cost;
  }

  event Registered (address user);
  
  /** @dev check for the valid email address.
    * @param _email email address.
    */
  modifier isEmailValid(string memory _email) 
  {
    require(EmailRegex.matches(_email), "Email mis-match");
    _;
  }

  constructor() {
    owner = msg.sender;
  }

  /** @dev update user account details.
    * @param _name user name.
    * @param _email user email.
    * @param _avatar user avatar.
    * @param _affiliate user affiliate.
    * @param _description user description.
    * @param _entity user entity.
    */
  function register(string memory _name, string memory _email, string memory _avatar, address _affiliate, string memory _description, string memory _entity, Fee memory _fee) 
  public 
  payable
  isEmailValid(_email)
  {
    emit Registered(msg.sender);
    accounts[msg.sender].name = _name;
    accounts[msg.sender].email = _email;
    accounts[msg.sender].avatar = _avatar;
    accounts[msg.sender].affiliate = _affiliate;
    accounts[msg.sender].description = _description;
    accounts[msg.sender].entity = _entity;
    accounts[msg.sender].fees.push(_fee);
  }

  /** @dev user account details.
    * @param _address user address.
    * @return _account user account.
    */
  function getAccount(address _address)
  public 
  view
  returns (Account memory _account) 
  {
    _account = accounts[_address];
    // addr = _address;
    // name = accounts[_address].name;
    // email = accounts[_address].email;
    // avatar = accounts[_address].avatar;
    // affiliate = accounts[_address].affiliate;
    // description = accounts[_address].description;
    // entity = accounts[_address].entity;
    return (_account);
  }

  /** @dev get verification price of verifier.
    * @param _address verifier address.
    * @return affiliate document address.
    */
  function getAffiliate(address _address)
  public 
  view
  returns(address affiliate)
  {
    return (accounts[_address].affiliate);
  }

  /** @dev get verification price of verifier.
    * @return fees account fees.
    */
  function getFees()
  public
  view
  returns(Fee[] memory fees)
  {
    return accounts[msg.sender].fees;
  }

  /** @dev get verification price of verifier.
    * @param _index fee uint.
    * @return fee account fee.
    */
  function getFee(uint _index)
  public
  view
  returns(Fee memory fee)
  {
    return accounts[msg.sender].fees[_index];
  }

  /** @dev get verification price of verifier.
  * @param _fee fee Fee.
  */
  function addFee(Fee memory _fee)
  public
  payable
  {
    accounts[msg.sender].fees.push(_fee);
  }

  /** @dev get verification price of verifier.
    * @param _fee fee Fee.
    * @param _index fee uint.
    */
  function updateFee(Fee memory _fee, uint _index)
  public
  payable
  {
    accounts[msg.sender].fees[_index] = _fee;
  }

  /** @dev get verification price of verifier.
    * @param _index fee uint.
    */
  function deleteFee(uint _index)
  public
  payable
  {
    for(uint i = _index; i < accounts[msg.sender].fees.length-1; i++){
      accounts[msg.sender].fees[i] = accounts[msg.sender].fees[i+1];      
    }
    accounts[msg.sender].fees.pop();
  }

  /** @dev kill smart contract if something bad happens.
    */
  function kill() 
  public 
  {
    if (msg.sender == owner) selfdestruct(payable(owner));
  }
  
}