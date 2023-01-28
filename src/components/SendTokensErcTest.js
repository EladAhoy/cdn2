import { useState, useEffect } from 'react';
export default function SendTokensErcTest() {
  // ethers.js
  const { ethers } = require('ethers');
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    async function getBalance() {
      const provider = new ethers.providers.JsonRpcProvider({
        url: 'https://goerli.ethereum.coinbasecloud.net',
        user: 'VZGF5OUSZVTMHPT46YAQ',
        password: 'BXL7Y7OOOQ5ABB6A7HC5OKXJQNCTHOMBMYGAP6MH',
      });
      const balance = await provider.getBalance('0xc94770007dda54cF92009BFF0dE90c06F603a09f');
      const balanceFormatted = ethers.utils.formatEther(balance);
      console.log('Your ETH balance is ', balanceFormatted);
      setBalance(balanceFormatted);
    }
    getBalance();
  }, []);


  // // web3.js
  // const Web3 = require('web3');
  // const endpoint = 'https://goerli.ethereum.coinbasecloud.net';
  // const base64String = Buffer.from('VZGF5OUSZVTMHPT46YAQ:BXL7Y7OOOQ5ABB6A7HC5OKXJQNCTHOMBMYGAP6MH').toString('base64');
  // const options = {
  //   keepAlive: true,
  //   withCredentials: true,
  //   timeout: 20000, // ms
  //   headers: [{ name: "Authorization", value: "Basic " + base64String }],
  // };

  // const web3Provider = new Web3.providers.HttpProvider(endpoint, options);
  // const web3 = new Web3(web3Provider);
  // const balance = await web3.eth.getBalance('0xc94770007dda54cF92009BFF0dE90c06F603a09f');
  // const balanceFormatted = web3.utils.fromWei(balance);
  // console.log('Your ETH balance is ', balanceFormatted);

  return (<>
    <h1>ok</h1>
  </>);
}