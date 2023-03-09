import React from "react";
import { FixMeLater } from "../types/general";

export default function TxList({ txs }: FixMeLater) {
  if (txs.length === 0) return null;

  return (
    <>
      {txs.map((item: FixMeLater) => (
        <div key={item} className="alert alert-info mt-5">
          <div className="flex-1">
            <label>{item.hash}</label>
          </div>
        </div>
      ))}
    </>
  );
}
