import React from "react";
import { FixMeLater } from "../../types/general";

//https://www.codementor.io/@rajjeet/step-by-step-how-to-add-redux-to-a-react-app-11tcgslmvi
export const CounterComponent = ({
  count,
  handleIncrementClick,
  handleDecrementClick,
}: FixMeLater) => (
  <div>
    <h1>Awesome Counter: {count}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);
