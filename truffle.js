require('babel-register');
require('babel-polyfill');

var provider;

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = '[REDACTED]';

if (!process.env.SOLIDITY_COVERAGE){
  provider = new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/')
}


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      // port: 30303,
      network_id: "*" // Match any network id
    },
    ropsten: {
        host: "localhost",
        port: 8545,
        network_id: "3"
    },
    coverage: {
      host: "localhost",
      network_id: "*", 
      port: 8555,         
      gas: 0xfffffffffff, 
      gasPrice: 0x01      
    }
  }
};
