// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

import "./Accounts.sol";

/** @title Documents. */
contract Documents {
  // state variables
  Document[] private documents;
  address payable private owner;
  address public accountsAddress;
  mapping (address => Count) private counts;
  mapping (address => uint) public balances;
  enum Status { Pending, Certified, Verified, Accepted, Rejected }
 
  struct Document {
    address requester;
    address verifier;
    address certifier;
    string name;
    string description;
    string image;
    uint fee;
    uint index;
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
  event DocumentTested (uint test);

  /** @dev check for document address exists.
    * @param _index document index.
    */
  modifier documentExists(uint _index) {
    require(documents[_index].index == _index, "Document not found");
    _;
  }

  /** @dev check for document address exists.
    * @param _address account address.
    */
  modifier documentsExist(address _address) {
    require(counts[_address].total > 0, "Documents not found");
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
  /** @dev check for contract owner.
  */
  modifier onlyOwner {
    require(msg.sender == owner, "Only owner can call.");
    _;
  }

  constructor(address acctAddr) {
    owner = payable(msg.sender);
    accountsAddress = acctAddr;
  }
  
  /** @dev add document.
    * @param _certifier document address.
    * @param _verifier document address.
    * @param _description document description.
    * @param _name document name.
    * @param _fee document fee.
    */
  function addDocument(address _certifier, address _verifier, string memory _name, string memory _description, uint _fee) 
  public 
  payable
  paidEnough(_fee)
  refund(_certifier, _fee)
  returns(bool success)
  {
    // TODO: Add document
    emit DocumentAdded(msg.sender);
    documents.push(
      Document({
        verifier: _verifier,
        certifier: _certifier,
        requester: msg.sender,
        description: _description,
        name: _name,
        image: "",
        index: documents.length,
        fee: _fee,
        status: Status.Pending
      })
    );
    // TODO: Update document counts
    counts[msg.sender].total += 1;
    counts[_certifier].total += 1;
    counts[_verifier].total += 1;
    return true;
  }

  /** @dev get documents.
    * @param _address account address.
    * @return _documents document.
    */  
  function getDocuments(address _address) 
  public 
  view
  documentsExist(_address)
  returns (Document[] memory) {
    // TODO: Get documents
    uint index = 0;
    uint count = counts[_address].total;
    Document[] memory items = new Document[](count);
    for (uint i=0; i<documents.length; i++) {
      if(documents[i].requester == msg.sender) {
        Document storage document = documents[i];
        items[index] = document;
        index++;
        continue;
      }
      if(documents[i].verifier == _address) {
        Document storage document = documents[i];
        items[index] = document;
        index++;
        continue;
      }
      if(documents[i].certifier == _address) {
        Document storage document = documents[i];
        items[index] = document;
        index++;
        continue;
      }
    }
    return items;
  }

  /** @dev get document.
    * @param _index document uint.
    * @return _document document.
    */
  function getDocument(uint _index) 
  public 
  view
  documentExists(_index)
  returns(Document memory)
  {
    // TODO: Get document
    Document memory item;
    if(documents[_index].requester == msg.sender) {
      Document storage document = documents[_index];
      return item = document;
    }
    if(documents[_index].verifier == Accounts(accountsAddress).getAdmin(msg.sender)) {
      Document storage document = documents[_index];
      return item = document;
    }
    if(documents[_index].certifier == Accounts(accountsAddress).getAdmin(msg.sender)) {
      Document storage document = documents[_index];
      return item = document;
    }
    return item;
  }

  /** @dev certify document.
    * @param _image document address.
    * @param _index document index.
    * @param _fee document fee.
    * @param status document status.
    */
  function certifyDocument(string memory _image, uint _index, uint _fee, Status status) 
  public 
  payable
  returns(bool)
  {
    // TODO: Certify document
    if(documents[_index].certifier == Accounts(accountsAddress).getAffiliate(msg.sender) && documents[_index].status == Status.Pending){
      documents[_index].status = status;
      documents[_index].image = _image;
      if(status == Status.Certified){
        emit DocumentCertified(msg.sender);
        counts[documents[_index].requester].certified += 1;
        return true;
      }
      if(status == Status.Rejected) {
        emit DocumentRejected(msg.sender);
        counts[documents[_index].requester].rejected += 1;
        // return the ether for rejection
        balances[documents[_index].certifier] -= _fee;
        payable(documents[_index].requester).transfer(_fee);
      }
    }
    return true;
  }

  /** @dev verify document.
    * @param _index document index.
    * @param status document status.
    */   
  function verifyDocument(uint _index, Status status) 
  public 
  payable
  returns(bool)
  {
    // TODO: Verify document
    if(documents[_index].verifier == Accounts(accountsAddress).getAffiliate(msg.sender) && documents[_index].status == Status.Certified){
      documents[_index].status = status;
      if(status == Status.Verified){
        emit DocumentVerified(msg.sender);
        counts[documents[_index].verifier].verified += 1;
        counts[documents[_index].requester].verified += 1;
      }
      if(status == Status.Rejected) {
        emit DocumentRejected(msg.sender);
        counts[documents[_index].verifier].rejected += 1;
        counts[documents[_index].requester].rejected += 1;
      }
    }
    return true;
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
    // TODO: Get document counts
    return (counts[_address].pending, counts[_address].certified, counts[_address].verified, counts[_address].rejected, counts[_address].total);
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