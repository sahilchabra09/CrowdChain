// import
const hre = require('hardhat');

//main function
async function main() {

  const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory")
  const campaignFactory = await CampaignFactory.deploy();

  // await campaignFactory.deployed();

  console.log("Factory deployed to:", campaignFactory.target);
}

// calling main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    console.error("Error deploying factory contract:", error);
    process.exit(1);

  });