// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

// import "hardhat/console.sol";
import "./Accounts.sol";

/** @title Profiles. */
contract Profiles {
  address payable private owner;
  address public accountsAddress;
  mapping (address => Profile) public profiles;

  struct Fee {
    string doc;
    uint cost;
  }

  struct Profile {
    string displayName;
    string email;
    string photoURL;
    Fee[] fees;
  }

  event ProfileAdded(address user);
  event ProfileUpdated(address user);

  /** @dev check for user paid enough.
    */
  modifier isTenant() {
    require(Accounts(accountsAddress).getAccount(msg.sender).isTenant == true, "Forbidden");
    _;
  }

  /** @dev check for contract owner.
  */
  modifier onlyOwner {
    require(msg.sender == owner, "Unauthorised.");
    _;
  }

  /** @dev constructor
    * @param acctAddr account address.
    */
  constructor(address acctAddr) {
    owner = payable(msg.sender);
    accountsAddress = acctAddr;
  }

  /** @dev add admin account details.
    * @param photoURL account photo.
    * @return success account success.
    */
  function addProfile(string memory photoURL)
  public 
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Add profile
    emit ProfileAdded(msg.sender);
    profiles[msg.sender].displayName = Accounts(accountsAddress).getAccount(msg.sender).displayName;
    profiles[msg.sender].email = Accounts(accountsAddress).getAccount(msg.sender).email;
    profiles[msg.sender].photoURL = photoURL;
    return true;
  }

  /** @dev get verification price of verifier.
    * @param _address tenant address.
    * @return profile account profile.
    */
  function getProfile(address _address)
  public 
  view
  returns(Profile memory)
  {
    // TODO: Get profile
    return (profiles[_address]);
  }

  /** @dev get verification price of verifier.
  * @param doc fee Fee.
  * @param cost fee Fee.
  */
  function addFee(string memory doc, uint cost)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Add fee
    profiles[msg.sender].fees.push(Fee({doc: doc, cost: cost}));

    return true;
  }

  /** @dev get verification price of verifier.
    * @return fees account fees.
    */
  function getFees()
  public
  view
  isTenant()
  returns(Fee[] memory fees)
  {
    // TODO: Get fees
    return profiles[msg.sender].fees;
  }

  /** @dev get verification price of verifier.
    * @param _index fee uint.
    * @return fee account fee.
    */
  function getFee(uint _index)
  public
  view
  isTenant()
  returns(Fee memory fee)
  {
    // TODO: Get fee
    return profiles[msg.sender].fees[_index];
  }

  /** @dev get verification price of verifier.
    * @param doc fee Fee.
    * @param cost fee Fee.
    * @param _index fee uint.
    */
  function updateFee(string memory doc, uint cost, uint _index)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Update fee
    profiles[msg.sender].fees[_index] = Fee({doc: doc, cost: cost});

    return true;
  }

  /** @dev get verification price of verifier.
    * @param _index fee uint.
    */
  function deleteFee(uint _index)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Delete fee
    uint length = profiles[msg.sender].fees.length-1;
    profiles[msg.sender].fees[_index] = profiles[msg.sender].fees[length];
    profiles[msg.sender].fees.pop();

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