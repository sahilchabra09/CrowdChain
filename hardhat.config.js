const { ethers } = require("ethers");
require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-waffle");
require('dotenv').config({ path: "./.env.local" })

task("accounts", "list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address)
  }
})

const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.15",
  defaultNetwork: "polygon",
  networks: {
    polygon: {
      url: process.env.POLY_RPC_URL,
      accounts: [PRIVATE_KEY]


    }

  }
};
