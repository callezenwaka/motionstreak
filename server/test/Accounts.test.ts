import { expect } from "chai";
import { ethers } from "hardhat";

describe("Accounts", function () {
  let stringUtils: any;
  let emailRegex: any;
  let accounts: any;

  before(async () => {
    const StringUtils = await ethers.getContractFactory("StringUtils");
    stringUtils = await StringUtils.deploy();
    await stringUtils.deployed();
    console.log("StringUtils deployed to:", stringUtils.address);

    const EmailRegex = await ethers.getContractFactory("EmailRegex");
    emailRegex = await EmailRegex.deploy();
    await emailRegex.deployed();
    console.log("EmailRegex deployed to:", emailRegex.address);

    const Accounts = await ethers.getContractFactory("Accounts", {
      libraries: {
        EmailRegex: emailRegex.address,
      },
    });
    accounts = await Accounts.deploy();
    await accounts.deployed();
    console.log("Accounts deployed to:", accounts.address);
  });

  it("Should add new acccount", async function () {
    const [owner] = await ethers.getSigners();
    const result = await accounts.register('John Doe', 'john.doe@mail.com', 'avatar', '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 'Test', 'requester', {doc: '', cost: 0});
    const res = await result.wait();

    expect(res.from).to.equal(owner.address);
    expect(res.to).to.equal(accounts.address);
    expect(res.contractAddress).to.equal(null);
    expect(res.transactionIndex).to.equal(0);
  });

  it("Should return an acccount", async function () {
    const [owner] = await ethers.getSigners();
    const result = await accounts.getAccount(owner.address);
    expect(result.name).to.equal('John Doe');
    expect(result.email).to.equal('john.doe@mail.com');
    expect(result.avatar).to.equal('avatar');
    expect(result.affiliate).to.equal('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199');
    expect(result.description).to.equal('Test');
    expect(result.entity).to.equal('requester');
    expect(result.fees.length).to.equal(1);
  });
});
