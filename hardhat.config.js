require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://localhost:7545",
      accounts: [
        "0x3490abf73c17058b881c4ce9e04fab38b31c38881bb2aa261222b22beefd0cc1",
      ],
    },
  },
};
