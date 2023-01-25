import { useState } from 'react';
import AddressValidationForm from './AddressValidationForm';
import ConnectToMetamask from './ConnectToMetamask';
import SendEthPayment from './SendEthPayment';
import './SendTokens.css';
// import SendTokensEth from './SendTokensEth';

export default function SendTokens() {
  const [selectedShow] = useState();
  const [quantity, setQuantity] = useState(1);
  // const [ethAddress, setEthAddress] = useState();

  const [finalCost, setFinalCost] = useState(0);
  const [fees, setFees] = useState(0);

  const handleQuantityChange = (event) => {
    const amount = event.target.value;
    if (!amount) return;
    if (amount < 0) {
      alert('Amount needs to be larger than 0');
      setQuantity(1);
      return;
    };
    setQuantity(event.target.value);
  };

  const calculateFinalCost = () => {
    // Calculate the final cost based on the selected show, quantity, and fees
    if (!selectedShow || selectedShow?.id === 0) {
      setFinalCost(0);
      setFees(0);
      return;
    }
    const fees = 10 * quantity;
    const showCost = selectedShow.cost * quantity;
    setFinalCost(showCost + fees);
    setFees(fees);
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
  };

  return (
    <div className='checkout-container animate__animated animate__rotateInUpLeft'>
      <h1>Send Tokens</h1>
      <section>
        <fieldset className="send-eth">
          <h2>Send ETH payments</h2>
          <SendEthPayment />
        </fieldset>
      </section>

      <form className='checkout-form' onSubmit={handleSubmit}>

        <section>
          <fieldset className="metamask-connect">
            <h2>Connect to Metamask</h2>
            <ConnectToMetamask />
          </fieldset>
        </section>

        <section>
          <fieldset className="delivery-details">
            <h2>Check Address</h2>
            <p>Please provide a valid ETH address.</p>
            <AddressValidationForm />
          </fieldset>

          {/* <fieldset className="show-details">
            <h2>Token Amount</h2>
            <p>Select amount to transfer.</p>
            <label>
              Amount:
              <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
          </fieldset> */}



        </section>
        {/* <section>
          <fieldset className="payment">
            <h2>Pre Payment</h2>
            <button type="button" onClick={calculateFinalCost}>
              Calculate Fees
            </button>
          </fieldset>

          <fieldset className="payment">
            <h2>Total Cost: ${finalCost}</h2>
            <p>Fees: ${fees}</p>
            <button type="submit">Checkout</button>
          </fieldset>
        </section> */}
      </form>
    </div>
  );
};


