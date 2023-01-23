import { useState } from 'react';
import { useWeb3 } from 'web3-react';
import { abi as HORD6ABI, address as HORD6Address } from './HORD6.js';

export default function SendTokensEth() {
  const [recipient, setRecipient] = useState('');
  const [status, setStatus] = useState('ready');
  const { library, account } = useWeb3();

  async function handleSend() {
    if (!recipient) {
      setStatus('Please enter a recipient address');
      return;
    }

    if (!library) {
      setStatus('Please connect to a web3 provider');
      return;
    }

    if (!account) {
      setStatus('Please unlock your account');
      return;
    }

    setStatus('Sending tokens...');

    try {
      const contract = new library.eth.Contract(HORD6ABI, HORD6Address);
      const amount = '20';
      const gasPrice = await library.eth.getGasPrice();
      const gasLimit = '100000';

      const tx = await contract.methods.transfer(recipient, amount)
        .send({ from: account, gasPrice, gasLimit });

      setStatus(`Sent ${amount} HORD6 to ${recipient}. TX: ${tx.transactionHash}`);
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Recipient address" value={recipient} onChange={e => setRecipient(e.target.value)} />
      <button onClick={handleSend}> Send Tokens </button>
      <p> {status} </p>
    </div >
  );
}


