import { expect } from "chai";
import { sign } from "crypto";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { ethers } from "hardhat";

describe("Documents", function () {
  let stringUtils: any;
  let emailRegex: any;
  let accounts: any;
  let documents: any;

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

    const Documents = await ethers.getContractFactory("Documents", {
      libraries: {
        StringUtils: stringUtils.address,
      },
    });
    documents = await Documents.deploy(accounts.address);
    await documents.deployed();
    console.log("Documents deployed to:", documents.address);
  });

  it("Should add new document", async function () {
    const [owner, addr1] = await ethers.getSigners();
    // await greeter.connect(addr1).setGreeting("Hallo, Erde!");
    const signer = documents.connect(addr1);
    // console.log(signer);
    // console.log(signer.balanceOf(addr1.address));
    // const balance = await ethers.provider.getBalance(addr1.address);
    // console.log(ethers.utils.formatEther(balance));
    // console.log(msg.value);
    // console.log(ethers.utils.parseEther(BigNumber.from(balance)));
    // ethers.utils.parseUnits('0.05', 'ether')
    // console.log(balance.toString());
    // ethers.utils.parseUnits('0.05', 'ether')
    // ethers.utils.parseEther

    const result = await documents.connect(addr1).addDocument('0xdD2FD4581271e230360230F9337D5c0430Bf44C0', '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 'Transcrript', 'Test', 'docAddress', 0);
    // const res = await result.wait();
    // console.log(owner.address);
    // console.log(addr1.address);
    // console.log(res);

    // expect(res.from).to.equal(owner.address);
    // expect(res.to).to.equal(accounts.address);
    // expect(res.contractAddress).to.equal(null);
    // expect(res.transactionIndex).to.equal(0);
  });

  // it("Should return an acccount", async function () {
  //   const [owner] = await ethers.getSigners();
  //   const result = await accounts.getAccount(owner.address);
  //   expect(result.name).to.equal('John Doe');
  //   expect(result.email).to.equal('john.doe@mail.com');
  //   expect(result.avatar).to.equal('avatar');
  //   expect(result.affiliate).to.equal('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199');
  //   expect(result.description).to.equal('Test');
  //   expect(result.entity).to.equal('requester');
  //   expect(result.fees.length).to.equal(1);
  // });
});
