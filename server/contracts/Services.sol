// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "./Accounts.sol";

contract Services {
  address payable private owner;
  address public accountsAddress;
  mapping (address => Service) private services;
//   mapping(address => mapping(uint => Service)) public services;

  struct Service {
    Fee[] fees;
  }

  struct Fee {
    string name;
    uint cost;
  }

  event FeeAdded(address user);
  event FeeUpdated(address user);
  event FeeDeleted(address user);

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

  constructor(address acctAddr) {
    owner = payable(msg.sender);
    accountsAddress = acctAddr;
  }

  /** @dev get verification price of verifier.
    * @param _address fee uint.
    * @return fees account fees.
    */
  function getFees(address _address)
  public
  view
  returns(Fee[] memory)
  {
    // TODO: Get fees
    return services[_address].fees;
  }

  /** @dev get verification price of verifier.
  * @param name fee Fee.
  * @param cost fee Fee.
  */
  function addFee(string memory name, uint cost)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Add fee
    emit FeeAdded(msg.sender);
    // profiles[msg.sender].fees.push(_fee);
    services[msg.sender].fees.push(Fee({name: name, cost: cost}));

    return true;
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
    return services[msg.sender].fees[_index];
  }

  /** @dev get verification price of verifier.
    * @param name fee Fee.
    * @param cost fee Fee.
    * @param _index fee uint.
    */
  function updateFee(string memory name, uint cost, uint _index)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Update fee
    emit FeeUpdated(msg.sender);
    services[msg.sender].fees[_index] = Fee({name: name, cost: cost});

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
    emit FeeDeleted(msg.sender);
    uint length = services[msg.sender].fees.length-1;
    services[msg.sender].fees[_index] = services[msg.sender].fees[length];
    services[msg.sender].fees.pop();

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