require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: process.env.DEPLOY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
