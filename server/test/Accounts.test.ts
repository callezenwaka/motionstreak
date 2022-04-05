import { expect } from "chai";
import { ethers } from "hardhat";

describe("Accounts", async function () {
  // const [owner, addr1, addr2] = await ethers.getSigners();
  // let stringUtils: any;
  // let emailRegex: any;
  let accounts: any;
  const phoneNumber: string = '+2348033330000';

  before(async () => {
    // console.log(owner.address);
    // const [owner, addr1, addr2] = await ethers.getSigners();

    // const StringUtils = await ethers.getContractFactory("StringUtils");
    // stringUtils = await StringUtils.deploy();
    // await stringUtils.deployed();
    // console.log("StringUtils deployed to:", stringUtils.address);

    // const EmailRegex = await ethers.getContractFactory("EmailRegex");
    // emailRegex = await EmailRegex.deploy();
    // await emailRegex.deployed();
    // console.log("EmailRegex deployed to:", emailRegex.address);

    // const Accounts = await ethers.getContractFactory("Accounts", {
    //   libraries: {
    //     EmailRegex: emailRegex.address,
    //   },
    // });
    const Accounts = await ethers.getContractFactory("Accounts");
    accounts = await Accounts.deploy();
    await accounts.deployed();
    console.log("Accounts deployed to:", accounts.address);
  });

  it("Should add new tenant acccount", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const result = await accounts.connect(addr1).addAccount('Tenant Account', 'tenant@mail.com', phoneNumber, true, true);
    const res = await result.wait();
    
    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(accounts.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
    expect(res.to).to.not.equal('');

    // console.log("owner.address: ",owner.address);
    // console.log(res);
  });

  // it("Should add new user acccount", async function () {
  //   const [owner, addr1, addr2, addr3] = await ethers.getSigners();
  //   const result = await accounts.connect(addr2).addAccount('User Account', 'user@mail.com', phoneNumber, false, true);
  //   const res = await result.wait();
    
  //   expect(res.from).to.equal(addr2.address);
  //   expect(res.to).to.equal(accounts.address);
  //   expect(res.contractAddress).to.equal(null);
  //   expect(res.transactionIndex).to.equal(0);
  //   expect(res.to).to.not.equal('');

  //   // console.log("owner.address: ",owner.address);
  //   // console.log("addr2.address: ",addr2.address);
  //   // console.log(res);
  // });

  // it("Should add new admin acccount", async function () {
  //   const [owner, addr1, addr2, addr3] = await ethers.getSigners();
  //   const result = await accounts.connect(addr1).addAdmin(addr3.address, 'Admin Account', 'admin@mail.com', phoneNumber, false, true);
  //   const res = await result.wait();
    
  //   expect(res.from).to.equal(addr1.address);
  //   expect(res.to).to.equal(accounts.address);
  //   expect(res.contractAddress).to.equal(null);
  //   expect(res.transactionIndex).to.equal(0);
  //   expect(res.to).to.not.equal('');

  //   // console.log("owner.address: ",owner.address);
  //   // console.log("addr3.address: ",addr3.address);
  //   // console.log(res);
  // });

  // it("Should return a tenant acccount", async function () {
  //   const [owner, addr1, addr2, addr3] = await ethers.getSigners();
  //   const res = await accounts.getAccount(addr1.address);

  //   expect(res.displayName).to.equal('Tenant Account');
  //   expect(res.email).to.equal('tenant@mail.com');
  //   expect(res.phoneNumber).to.equal(phoneNumber);
  //   expect(res.isTenant).to.equal(true);
  //   expect(res.isActivated).to.equal(true);
  //   expect(res.isActive).to.equal(true);

  //   // console.log(res);
  // });

  // it("Should update and return a user acccount", async function () {
  //   const [owner, addr1, addr2, addr3] = await ethers.getSigners();
  //   const result = await accounts.connect(addr2).updateAccount('User addr2', 'user@mail.com', phoneNumber);
  //   await result.wait();

  //   const res = await accounts.getAccount(addr2.address);

  //   expect(res.displayName).to.equal('User addr2');
  //   expect(res.email).to.equal('user@mail.com');
  //   expect(res.phoneNumber).to.equal(phoneNumber);
  //   expect(res.isTenant).to.equal(false);
  //   expect(res.isActivated).to.equal(true);
  //   expect(res.isActive).to.equal(true);
    
  //   // console.log(res);
  // });

  // it("Should update and return an admin acccount", async function () {
  //   const [owner, addr1, addr2, addr3] = await ethers.getSigners();
  //   const result = await accounts.connect(addr1).updateAdmin(addr3.address, 'Admin addr2', 'admin@mail.com', phoneNumber, false);
  //   await result.wait();

  //   const res = await accounts.getAccount(addr3.address);

  //   expect(res.displayName).to.equal('Admin addr2');
  //   expect(res.email).to.equal('admin@mail.com');
  //   expect(res.phoneNumber).to.equal(phoneNumber);
  //   expect(res.isTenant).to.equal(false);
  //   expect(res.isActivated).to.equal(true);
  //   expect(res.isActive).to.equal(false);
    
  //   // console.log(res);
  // });

  it("Should add new tenant profile", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const result = await accounts.connect(addr1).addProfile('QmQbA7BrBNkh1bbSgtUYdUJYsHRfvRN6k5vocxHgjadUjr');
    const res = await result.wait();
    
    expect(res.from).to.equal(addr1.address);
    expect(res.to).to.equal(accounts.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
    expect(res.to).to.not.equal('');

    // console.log("owner.address: ",owner.address);
    // console.log(res);
  });

  it("Should get tenant profile", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const res = await accounts.getProfile(addr1.address);

    expect(res.displayName).to.equal('Tenant Account');
    expect(res.email).to.equal('tenant@mail.com');
    expect(res.photoURL).to.equal('QmQbA7BrBNkh1bbSgtUYdUJYsHRfvRN6k5vocxHgjadUjr');
    expect(res.fees.length).to.equal(0);
    // expect(res.isTenant).to.equal(false);
    // expect(res.isActivated).to.equal(true);
    // expect(res.isActive).to.equal(false);
    
    // console.log(res);
  });
});
