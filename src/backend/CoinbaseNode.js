const Web3 = require('web3');
// const ERC20 = require('web3-eth-erc20');

NODE_ENDPOINT = 'https://goerli.ethereum.coinbasecloud.net';
NODE_USERNAME = 'VZGF5OUSZVTMHPT46YAQ';
NODE_PASSWORD = 'BXL7Y7OOOQ5ABB6A7HC5OKXJQNCTHOMBMYGAP6MH';

// Import environment variables;
const url = NODE_ENDPOINT;
const username = NODE_USERNAME;
const password = NODE_PASSWORD;
console.log(url);
// Create base64 string of project credentials
const string = `${username}:${password}`;
const base64String = Buffer.from(string).toString("base64");

// Options
const options = {
  keepAlive: true,
  withCredentials: true,
  timeout: 20000, // ms
  headers: [
    {
      name: 'Authorization',
      value: `Basic ${base64String}`
    },
  ]
};

// Create web3 node provider using project credentials
const web3Provider = new Web3.providers.HttpProvider(url, options);
const web3 = new Web3(web3Provider);


// Function to read information from the blockchain
async function getBlockchainInfo() {

  let latestBlock = await web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ", result);
    return result;
  });

  let getTransaction = await web3.eth.getBlock(latestBlock).then(result => {
    console.log("Information about block", result);
    if (result.transactions.length !== null) {
      return result.transactions[0];
    }
    else {
      console.log(`No transactions found for ${latestBlock}`);
      return null;
    }
  });

  if (getTransaction != null) {
    let getTransactionInfo = web3.eth.getTransaction(getTransaction).then(result => {
      console.log("Information about transaction", result);
      return;
    });
  }
};

// Execute function
// getBlockchainInfo();
let tokenAddress = '0xE72c69b02B4B134fb092d0D083B287cf595ED1E6'; // Demo Token contract address
let toAddress = '0x1b1872be0f8685b234c487ecec406f7770ca63ed';// where to send it
let fromAddress = '0x5fDcBA5fa00A4e9Eae4a9999477D371F2afAe02C';// Your address
//amount
const Web3js = new Web3(new Web3.providers.HttpProvider("https://VZGF5OUSZVTMHPT46YAQ:BXL7Y7OOOQ5ABB6A7HC5OKXJQNCTHOMBMYGAP6MH@bisontrailsURL"));
let amount = Web3js.utils.toHex(Web3js.utils.toWei("1")); //1 DEMO Token


// Use BigNumber
// let decimals = web3.utils.toBN(18);
// let amount = web3.utils.toBN(100);
let contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs:
      [{
        name: "",
        type: "string"
      }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_spender", "type": "address" },
    { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event"
  },
  {
    "anonymous": false, "inputs": [], "name": "Pause", "type": "event"
  },
  {
    "anonymous": false, "inputs": [], "name": "Unpause", "type": "event"
  }];
// Get ERC20 Token contract instance
let contract = new web3.eth.Contract(contractABI, tokenAddress);
// calculate ERC20 token amount
// let value = amount.mul(web3.utils.toBN(10).pow(decimals));
let value = amount;
// call transfer function
contract.methods.transfer(toAddress, value).send({ from: fromAddress })
  .on('transactionHash', function (hash) {
    console.log(hash);
  });