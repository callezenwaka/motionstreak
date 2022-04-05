// SPDX-License-Identifier: GPL-3.0
// https://docs.soliditylang.org/en/v0.5.4/types.html#structs

pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

/** @title Accounts. */
contract Accounts {
  address payable private owner;
  mapping (address => Account) public accounts;
  // mapping (address => Admin) public admins;

  struct Account {
    string displayName;
    string phoneNumber;
    string email;
    string photoURL;
    address affiliate;
    bool isTenant;
    bool isActive;
    bool isActivated;
  }

  // struct Admin {
  //   address affiliate;
  // }

  event AccountAdded(address user);
  event AccountUpdated(address user);
  event AccountDeleted(address user);

  /** @dev check for user account.
    * @param _address user address.
    */
  modifier isAccount(address _address) { 
    require(accounts[_address].affiliate != address(0), "Unauthorised Access");
    _;
  }

  /** @dev check for admin account.
    * @param _address user address.
    */
  modifier isAdmin(address _address) {
    require(accounts[_address].affiliate != address(0), "Unauthorised Access");
    require(accounts[_address].affiliate != msg.sender, "Unauthorised admin");
    _;
  }

  /** @dev check for user paid enough.
    */
  modifier isTenant() { 
    require(accounts[msg.sender].isTenant == true, "Forbidden");
    _;
  }

  /** @dev check for contract owner.
  */
  modifier onlyOwner {
    require(msg.sender == owner, "Unauthorised.");
    _;
  }

  constructor() {
    owner = payable(msg.sender);
  }

  /** @dev add user account details.
    * @param _address account address.
    * @param displayName account name.
    * @param email account email.
    * @param phoneNumber account phone.
    * @param _isTenant account tenant.
    * @param isActivated account activation.
    * @return success account success.
    */
  function addAccount(address _address, string memory displayName, string memory email, string memory phoneNumber, bool _isTenant, bool isActivated) 
  public 
  payable
  returns(bool)
  {
    // TODO: Add account
    emit AccountAdded(_address);
    accounts[_address].displayName = displayName;
    accounts[_address].email = email;
    accounts[_address].phoneNumber = phoneNumber;
    accounts[_address].isTenant = _isTenant;
    accounts[_address].isActivated = isActivated;
    accounts[_address].isActive = true;
    accounts[_address].affiliate = msg.sender;

    return true;
  }

  /** @dev get user account details.
    * @param _address account address.
    * @return _account account account.
    */
  function getAccount(address _address)
  public 
  view
  isAccount(_address)
  returns (Account memory) 
  {
    // TODO: Get account
    Account memory account;
    account = accounts[_address];
    return account;
  }

  /** @dev add admin account details.
    * @param _address account address.
    * @param displayName account name.
    * @param email account email.
    * @param phoneNumber account phone.
    * @param isActive account active.
    * @return success account success.
    */
  function updateAccount(address _address, string memory displayName, string memory email, string memory phoneNumber, bool isActive) 
  public 
  payable
  isAccount(msg.sender)
  returns(bool)
  {
    // TODO: Update account
    emit AccountUpdated(_address);
    accounts[_address].displayName = displayName;
    accounts[_address].email = email;
    accounts[_address].phoneNumber = phoneNumber;
    if(accounts[msg.sender].isTenant && _address != msg.sender) {
      accounts[_address].isActive = isActive;
    }

    return true;
  }

  /** @dev kill smart contract if something bad happens.
    */
  function kill() 
  public
  payable
  onlyOwner
  {
    selfdestruct(owner);
  }
}