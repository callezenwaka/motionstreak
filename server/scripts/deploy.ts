// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  // await greeter.deployed();
  // console.log("Greeter deployed to:", greeter.address);

  const StringUtils = await ethers.getContractFactory("StringUtils");
  const stringUtils = await StringUtils.deploy();
  await stringUtils.deployed();
  console.log("StringUtils deployed to:", stringUtils.address);

  const EmailRegex = await ethers.getContractFactory("EmailRegex");
  const emailRegex = await EmailRegex.deploy();
  await emailRegex.deployed();
  console.log("EmailRegex deployed to:", emailRegex.address);

  const Accounts = await ethers.getContractFactory("Accounts");
  const accounts = await Accounts.deploy();
  await accounts.deployed();
  console.log("Accounts deployed to:", accounts.address);

  const Documents = await ethers.getContractFactory("Documents");
  const documents = await Documents.deploy(accounts.address);
  await documents.deployed();
  console.log("Documents deployed to:", documents.address);
}

// Use async/await everywhere and properly handle errors.
const init = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

init();