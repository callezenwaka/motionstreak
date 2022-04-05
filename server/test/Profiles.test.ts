import { expect } from "chai";
import { ethers } from "hardhat";

describe("Documents", async function () {
  let accounts: any;
  let profiles: any;
  const phoneNumber: string = '+2348033330000';
  const cost: number = 1;
  const doc: string = 'Certificate';
  const displayName: string = 'Tenant Account';
  const email: string = 'tenant@mail.com';
  const photoURL: string = 'QmQbA7BrBNkh1bbSgtUYdUJYsHRfvRN6k5vocxHgjadUjr';

  before(async () => {
    const Accounts = await ethers.getContractFactory("Accounts");
    accounts = await Accounts.deploy();
    await accounts.deployed();
    console.log("Accounts deployed to:", accounts.address);

    const Profiles = await ethers.getContractFactory("Profiles");
    profiles = await Profiles.deploy(accounts.address);
    await profiles.deployed();
    console.log("Profile deployed to:", profiles.address);
  });

  it("Should add new profile", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const user = await accounts.connect(addr1).addAccount(displayName, email, phoneNumber, true, true);
    await user.wait();

    const profile = await profiles.connect(addr1).addProfile(photoURL);
    const res = await profile.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(profiles.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return a tenant profile", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await profiles.connect(addr1).getProfile(addr1.address);

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.displayName).to.equal(displayName);
    expect(res.email).to.equal(email);
    expect(res.photoURL).to.equal(photoURL);
    expect(res.fees.length).to.equal(0);
  });

  it("Should add new processing fee", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const profile = await profiles.connect(addr1).addFee(doc, cost);
    const res = await profile.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(profiles.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return processing fees", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await profiles.connect(addr1).getFees();

    expect(res).to.be.an('array').that.is.not.empty;
    expect(res.length).to.equal(1);
  });

  it("Should return a processing fee", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await profiles.connect(addr1).getFee(0);

    expect(res.doc).to.equal(doc);
    expect(res.cost).to.equal(cost);
  });

  it("Should update a processing fee", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const profile = await profiles.connect(addr1).updateFee(doc, 3, 0);
    const res = await profile.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(profiles.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should delete a processing fee", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const profile = await profiles.connect(addr1).deleteFee(0);
    const res = await profile.wait();

    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(profiles.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });
});
