import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import "./SendEthPayments.css";
import React from "react";
import { FixMeLater } from "../types/general";

const startPayment = async ({ setError, setTxs, ether, addr }: FixMeLater) => {
  try {
    //@ts-ignore
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    //@ts-ignore
    await window.ethereum.send("eth_requestAccounts");
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err: FixMeLater) {
    setError(err.message);
  }
};

export default function SendEthPayment() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e: FixMeLater) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError(undefined);
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  return (
    <form className="eth-payments-form" onSubmit={handleSubmit}>
      <main>
        <div className="inputs-container">
          <div>
            <input type="text" name="addr" placeholder="Recipient Address" />
          </div>
          <div>
            <input name="ether" type="text" placeholder="Amount in ETH" />
          </div>
        </div>
      </main>

      <footer>
        <button type="submit" className="pay-now-btn">
          Pay now
        </button>
        <ErrorMessage message={error} />
        <TxList txs={txs} />
      </footer>
    </form>
  );
}
