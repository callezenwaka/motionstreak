// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "./StringUtils.sol";
// import "./EmailRegex.sol";
import "./Accounts.sol";

/** @title Documents. */
contract Documents {
    
  address private owner;
  address public accountsAddress;
  Document[] private documents;
  mapping (address => Count) private counts;
  mapping (uint => Document) private docs;
  mapping (address => uint) public balances;
  enum Status { Pending, Certified, Verified, Accepted, Rejected }
 
  struct Document {
    address requester;
    address verifier;
    address certifier;
    string name;
    string description;
    string docAddress;
    uint fee;
    Status status;
  }
  
  struct Count {
    uint pending;
    uint certified;
    uint verified;
    uint accepted;
    uint rejected;
    uint total;
  }

  event DocumentAdded(address user);
  event DocumentCertified(address user);
  event DocumentVerified(address user);
  event DocumentRejected(address user);
  event Test (uint test);

  /** @dev check for document address exists.
    * @param _docAddress document address.
    */
  modifier docAddressExists(string memory _docAddress) 
  {
    bool found = false;
    for (uint i=0; i<documents.length; i++) {
      if (StringUtils.equal(documents[i].docAddress, _docAddress)) {
        found = true;
        break; 
      }
    }
    require(!found, "Document address found");
    _;
  }

  /** @dev check for user paid enough.
    * @param _fee user fee.
    */
  modifier paidEnough(uint _fee) { 
    require(msg.value >= _fee, "Insufficient fund");
    _;
  }

  /** @dev refund extra amount sent.
    * @param addr user address.
    */
  modifier refund(address addr, uint _fee) {
    //refund extra ether received
    _;
    uint amountToRefund = msg.value - _fee;
    if(amountToRefund > 0){
      payable(msg.sender).transfer(amountToRefund);
      balances[addr] += _fee;
    }
  }

  constructor(address acctAddr)  
  {
    owner = msg.sender;
    accountsAddress = acctAddr;
  }
  
  /** @dev add document.
    * @param _verifier document address.
    * @param _certifier document address.
    * @param _description document description.
    * @param _docAddress document address.
    * @param _name document name.
    * @param _fee document fee.
    */
  function addDocument(address _verifier, address _certifier, string memory _name, string memory _description, string memory _docAddress, uint _fee) 
  public 
  payable
  docAddressExists(_docAddress)
  paidEnough(_fee)
  refund(_certifier, _fee)
  {
    emit DocumentAdded(msg.sender);
    documents.push(
      Document({
        verifier: _verifier,
        certifier: _certifier,
        requester: msg.sender,
        name: _name,
        description: _description,
        docAddress: _docAddress,
        fee: _fee,
        status: Status.Pending
      })
    );
    // get document counts
    counts[msg.sender].total = counts[msg.sender].total + 1;
    counts[_certifier].total = counts[_certifier].total + 1;
    counts[_verifier].total = counts[_verifier].total + 1;
  }

  /** @dev get documents.
    * @return _documents document.
    */  
  function getDocuments() 
  public 
  view 
  returns (Document[] memory _documents) {
    uint _index = 0;
    // Document[] memory _documents = new Document[](_index);
    for (uint i=0; i<documents.length; i++) {
      if(documents[i].verifier == msg.sender) {
        _documents[_index] = documents[i];
        _index++;
      }
      if(documents[i].certifier == msg.sender) {
        _documents[_index] = documents[i];
        _index++;
      }
      if(documents[i].requester == msg.sender) {
        _documents[_index] = documents[i];
        _index++;
      }
    }
    return (_documents);
  }

  /** @dev get document.
    * @param docAddress document address.
    * @param index document uint.
    * @return _document document.
    */
  function getDocument(string memory docAddress, uint index) 
  public 
  view
  returns(Document memory _document)
  {
    // get document
    for (uint i=index; i<documents.length; i++) {
      if(StringUtils.equal(documents[i].docAddress, docAddress)) {
        _document = documents[i];
        break;
      }
    }
    return (_document);
  }

  /** @dev certify document.
    * @param _docAddress document docAddress.
    * @param _fee document fee.
    * @param status document status.
    */
  function certifyDocument(string memory _docAddress, uint _fee, Status status) 
  public 
  payable
  {
    for (uint i=0; i<documents.length; i++) {
      if(StringUtils.equal(documents[i].docAddress, _docAddress) && documents[i].certifier == Accounts(accountsAddress).getAffiliate(msg.sender) && documents[i].status == Status.Pending){
        // balances[documents[i].certifier] -= _fee;
        documents[i].status = status;
        if(status == Status.Certified){
          emit DocumentCertified(msg.sender);
          counts[documents[i].requester].certified = counts[documents[i].requester].certified + 1;
          // send ether to verified account
          // payable(documents[i].certifier).transfer(_fee);
        }
        if(status == Status.Rejected) {
          emit DocumentRejected(msg.sender);
          counts[documents[i].requester].rejected = counts[documents[i].requester].rejected + 1;
          // return the ether for rejection
          balances[documents[i].certifier] -= _fee;
          payable(documents[i].requester).transfer(_fee);
        }
        break;
      }
    }
  }

  /** @dev verify document.
    * @param docAddress document address.
    * @param status document status.
    */   
  function verifyDocument(string memory docAddress, Status status) 
  public 
  payable
  {
    for (uint i=0; i<documents.length; i++) {
      if(StringUtils.equal(documents[i].docAddress, docAddress) && documents[i].verifier == Accounts(accountsAddress).getAffiliate(msg.sender) && documents[i].status == Status.Certified){
        documents[i].status = status;
        if(status == Status.Verified){
          emit DocumentVerified(msg.sender);
          counts[documents[i].verifier].verified = counts[documents[i].verifier].verified + 1;
        }
        if(status == Status.Rejected) {
          emit DocumentRejected(msg.sender);
          counts[documents[i].requester].rejected = counts[documents[i].requester].rejected + 1;
        }
        break;
      }
    }
  }
  
  /** @dev get count for users.
    * @param _address user address.
    * @return pending count.
    * @return certified count.
    * @return verified count.
    * @return rejected count.
    * @return total count.
    */ 
  function getCounts (address _address) 
  public 
  view
  returns(uint pending, uint certified, uint verified, uint rejected, uint total) 
  {
    return (counts[_address].pending, counts[_address].certified, counts[_address].verified, counts[_address].rejected, counts[_address].total);
  }

  /** @dev kill smart contract if something bad happens.
    */
  function kill()
  public
  payable
  {
    if (msg.sender == owner) selfdestruct(payable(owner));
  }
}