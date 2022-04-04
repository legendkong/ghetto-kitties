const hre = require("hardhat");

async function main() {

  const GhettoKittiesNFT = await hre.ethers.getContractFactory("GhettoKittiesNFT");
  const ghettoKittiesNFT = await GhettoKittiesNFT.deploy();

  await ghettoKittiesNFT.deployed();

  console.log("GhettoKittiesNFT deployed to:", ghettoKittiesNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
