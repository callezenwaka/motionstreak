import { expect } from "chai";
import { ethers } from "hardhat";

describe("Accounts", function () {
  // let transactions: any;
  // let stringUtils: any;
  // let emailRegex: any;
  // let accounts: any;

  // before(async () => {
  //   const Transactions = await ethers.getContractFactory("Transactions");
  //   transactions = await Transactions.deploy();
  //   await transactions.deployed();

  //   const StringUtils = await ethers.getContractFactory("StringUtils");
  //   stringUtils = await StringUtils.deploy();
  //   await stringUtils.deployed();
  //   console.log("StringUtils deployed to:", stringUtils.address);

  //   const EmailRegex = await ethers.getContractFactory("EmailRegex");
  //   emailRegex = await EmailRegex.deploy();
  //   await emailRegex.deployed();
  //   console.log("EmailRegex deployed to:", emailRegex.address);

  //   const Accounts = await ethers.getContractFactory("Accounts");
  //   accounts = await Accounts.deploy();
  //   await accounts.deployed();
  //   console.log("Accounts deployed to:", accounts.address);
  // });

  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
