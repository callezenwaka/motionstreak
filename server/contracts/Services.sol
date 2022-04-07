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
    uint index;
  }

  event ServiceAdded(address user);
  event ServiceUpdated(address user);
  event ServiceDeleted(address user);

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

  /** @dev get processing charges of certifier.
    * @param _address account address.
    * @return services account services.
    */
  function getServices(address _address)
  public
  view
  returns(Fee[] memory)
  {
    // TODO: Get services
    return services[_address].fees;
  }

  /** @dev add processing charge of certifier.
  * @param name service name.
  * @param cost service cost.
  */
  function addService(string memory name, uint cost)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Add service
    emit ServiceAdded(msg.sender);
    uint index = services[msg.sender].fees.length;
    services[msg.sender].fees.push(Fee({ name, cost, index }));

    return true;
  }

  /** @dev get processing charge of certifier.
    * @param _index service index.
    * @return service account service.
    */
  function getService(uint _index)
  public
  view
  isTenant()
  returns(Fee memory)
  {
    // TODO: Get service
    return services[msg.sender].fees[_index];
  }

  /** @dev update processing charge of certifier.
    * @param name service name.
    * @param cost service cost.
    * @param _index service index.
    */
  function updateService(string memory name, uint cost, uint _index)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Update service
    emit ServiceUpdated(msg.sender);
    services[msg.sender].fees[_index] = Fee({name: name, cost: cost});

    return true;
  }

  /** @dev delete processing charge of certifier.
    * @param _index service index.
    */
  function deleteService(uint _index)
  public
  payable
  isTenant()
  returns(bool)
  {
    // TODO: Delete service
    emit ServiceDeleted(msg.sender);
    uint length = services[msg.sender].fees.length-1;
    services[msg.sender].fees[length].index = _index;
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