import React from "react";
import { FixMeLater } from "../types/general";

export default function ErrorMessage({ message }: FixMeLater) {
  if (!message) return null;

  return (
    <div className="alert alert-error mt-5">
      <div className="flex-1">
        <label>{message}</label>
      </div>
    </div>
  );
}
