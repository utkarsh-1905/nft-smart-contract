const hre = require("hardhat");

async function main() {
  const myNFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await myNFT.deploy();

  await nft.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

const deploy = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

deploy();
