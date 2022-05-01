require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/wTwf8ceLdwK_vtb3xRWkMXlSRn845YRO",
      accounts: [
        "17ba26a185109ba0e470d8737f4937264d9418a2bcc0eb31db48b7d43ecaf035",
      ],
    },
  },
}
