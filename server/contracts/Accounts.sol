// SPDX-License-Identifier: GPL-3.0
// https://docs.soliditylang.org/en/v0.5.4/types.html#structs

pragma solidity >=0.8.0 <0.9.0;

// import "hardhat/console.sol";

/** @title Accounts. */
contract Accounts {
  address payable private owner;
  mapping (address => Account) public accounts;
  mapping (address => Admin) public admins;

  struct Account {
    string displayName;
    string phoneNumber;
    string email;
    bool isTenant;
    bool isActive;
    bool isActivated;
  }

  struct Admin {
    address affiliate;
  }

  event AccountAdded(address user);
  event AccountUpdated(address user);

  /** @dev check for verifier account.
    * @param _address user address.
    */
  modifier isVerifier(address _address) { 
    require(admins[_address].affiliate == msg.sender, "Unauthorised verifier");
    _;
  }

  /** @dev check for admin account.
    * @param _address user address.
    */
  modifier isAdmin(address _address) {
    require(admins[_address].affiliate != address(0), "Unauthorised admin");
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

  function getNoAccount()
  public
  pure
  returns(address)
  {
    return address(0);
  }

  /** @dev add user account details.
    * @param displayName account name.
    * @param email account email.
    * @param phoneNumber account phone.
    * @param _isTenant account tenant.
    * @param isActivated account activation.
    * @return success account success.
    */
  function addAccount(string memory displayName, string memory email, string memory phoneNumber, bool _isTenant, bool isActivated) 
  public 
  payable
  returns(bool)
  {
    // TODO: Add account
    emit AccountAdded(msg.sender);
    accounts[msg.sender].displayName = displayName;
    accounts[msg.sender].email = email;
    accounts[msg.sender].phoneNumber = phoneNumber;
    accounts[msg.sender].isTenant = _isTenant;
    accounts[msg.sender].isActivated = isActivated;
    accounts[msg.sender].isActive = true;

    return true;
  }

  /** @dev add admin account details.
    * @param _address account address.
    * @param displayName account name.
    * @param email account email.
    * @param phoneNumber account phone.
    * @param _isTenant account tenant.
    * @param isActivated account activation.
    * @return success account success.
    */
  function addAdmin(address _address, string memory displayName, string memory email, string memory phoneNumber, bool _isTenant, bool isActivated) 
  public 
  payable
  isTenant()
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
    admins[_address].affiliate = msg.sender;

    return true;
  }

  /** @dev get user account details.
    * @param _address account address.
    * @return _account account account.
    */
  function getAccount(address _address)
  public 
  view
  returns (Account memory) 
  {
    // TODO: Get account
    Account memory account;
    account = accounts[_address];
    return account;
  }

  /** @dev add admin account details.
    * @param displayName account name.
    * @param email account email.
    * @param phoneNumber account phone.
    * @return success account success.
    */
  function updateAccount(string memory displayName, string memory email, string memory phoneNumber) 
  public 
  payable
  returns(bool)
  {
    // TODO: Update account
    emit AccountUpdated(msg.sender);
    accounts[msg.sender].displayName = displayName;
    accounts[msg.sender].email = email;
    accounts[msg.sender].phoneNumber = phoneNumber;

    return true;
  }

  /** @dev add admin account details.
    * @param displayName account name.
    * @param email account email.
    * @param phoneNumber account phone.
    * @param isActive account active.
    * @return success account success.
    */
  function updateAdmin(address _address, string memory displayName, string memory email, string memory phoneNumber, bool isActive) 
  public 
  payable
  isVerifier(_address)
  returns(bool)
  {
    // TODO: Update account
    emit AccountUpdated(_address);
    accounts[_address].displayName = displayName;
    accounts[_address].email = email;
    accounts[_address].phoneNumber = phoneNumber;
    accounts[_address].isActive = isActive;

    return true;
  }

  /** @dev get verification price of verifier.
    * @return affiliate account address.
    */
  function getAffiliate(address _address)
  public 
  view
  isAdmin(_address)
  returns(address)
  {
    // TODO: Get affiliation
    return (admins[_address].affiliate);
  }

  /** @dev get verification price of verifier.
    * @return affiliate account address.
    */
  function getAdmin(address _address)
  public 
  view
  returns(address)
  {
    // TODO: Get affiliation
    return (admins[_address].affiliate);
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