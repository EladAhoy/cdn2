import React from "react";
import { useState } from "react";
import { FixMeLater } from "../types/general";

const validateEthereumAddress = (address: FixMeLater) => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (
    /^(0x)?[0-9a-fA-F]{40}$/.test(address) ||
    /^(0x)?[0-9A-Fa-f]{40}$/.test(address)
  ) {
    return true;
  }
  return false;
};

export default function AddressValidationForm() {
  const [address, setAddress] = useState("");
  const [valid, setValid] = useState(false);

  const handleClick = (event: FixMeLater) => {
    setAddress(event.target.value);
    setValid(validateEthereumAddress(event.target.value));
  };

  return (
    <div className="center-content">
      <div>Address:</div>
      <div>
        <input
          type="text"
          value={address}
          onChange={handleClick}
          onBlur={handleClick}
        />
      </div>
      {valid ? (
        <div className="green">Valid Ethereum Address</div>
      ) : (
        <div className="red">Invalid Ethereum Address</div>
      )}
    </div>
  );
}
