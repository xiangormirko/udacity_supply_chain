const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonicPhrase = "your 12 word mnemonic"; // 12 word mnemonic
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
  },
  providerOrUrl: "your infura url"
});



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => provider,
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.23"
    }
  },
  mocha: {
    timeout: 200000
 },
};