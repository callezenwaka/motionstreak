import { expect } from "chai";
import { ethers } from "hardhat";

describe("Documents", async function () {
  let accounts: any;
  let documents: any;
  const phoneNumber: string = '+2348033330000';
  const name: string = 'Transcript';
  const description: string = 'Transcript';
  const displayName: string = 'User Account';
  const email: string = 'user@mail.com';

  before(async () => {
    const Accounts = await ethers.getContractFactory("Accounts");
    accounts = await Accounts.deploy();
    await accounts.deployed();
    console.log("Accounts deployed to:", accounts.address);

    const Documents = await ethers.getContractFactory("Documents");
    documents = await Documents.deploy(accounts.address);
    await documents.deployed();
    console.log("Documents deployed to:", documents.address);
  });

  it("Should add new document", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const user = await accounts.connect(addr3).addAccount(displayName, email, phoneNumber, false, true);
    await user.wait();

    const document = await documents.connect(addr3).addDocument(addr1.address, addr2.address, name, description, 1, { value: 1 });
    const res = await document.wait();

    expect(res.from).to.equal(addr3.address);
    expect(res.to).to.equal(documents.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return a user documents", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr3).getDocuments(addr3.address);

    expect(res).to.be.an('array').that.is.not.empty;
  });

  it("Should return a user document", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr3).getDocument(0);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.requester).to.equal(addr3.address);
    expect(res.certifier).to.equal(addr1.address);
    expect(res.verifier).to.equal(addr2.address);
    expect(res.name).to.equal(name);
    expect(res.description).to.equal(description);
    expect(res.image).to.equal('');
    expect(res.fee).to.equal(1);
    expect(res.index).to.equal(0);
    expect(res.status).to.equal(0);
  });

  it("Should return a user document count", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await documents.connect(addr3).getCounts(addr3.address);

    expect(res.pending).to.equal(0);
    expect(res.certified).to.equal(0);
    expect(res.verified).to.equal(0);
    expect(res.rejected).to.equal(0);
    expect(res.total).to.equal(1);
  });
});
