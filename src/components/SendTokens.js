import { useState } from 'react';
import AddressValidationForm from './AddressValidationForm';
// import SendTokensEth from './SendTokensEth';
import './SendTokens.css';

export default function SendTokens() {
  const [selectedShow] = useState();
  const [quantity, setQuantity] = useState(1);
  // const [ethAddress, setEthAddress] = useState();
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    creditCard: ''
  });
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

  const handleBillingInfoChange = (event) => {
    const { name, value } = event.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value
    });
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
      <form className='checkout-form' onSubmit={handleSubmit}>
        <section>
          <fieldset className="show-details">
            <h2>Select Amount</h2>
            <label>
              Amount:
              <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
          </fieldset>

          <fieldset className="delivery-details">
            <h2>Destination Address</h2>
            <p>Please provide a valid ETH address.</p>
            <AddressValidationForm />
          </fieldset>
        </section>
        <section>
          <fieldset>
            <h2>Newsletter Information</h2>
            {/* <SendTokensEth /> */}
            <label>
              Name:
              <input type="text" name="name" value={billingInfo.name} onChange={handleBillingInfoChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={billingInfo.email} onChange={handleBillingInfoChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" name="address" value={billingInfo.address} onChange={handleBillingInfoChange} />
            </label>
            <br />
          </fieldset>
          <fieldset className="payment">
            <h2>Pre Payment</h2>
            <button type="button" onClick={calculateFinalCost}>
              Calculate Fees
            </button>
          </fieldset>
        </section>
        <section>
          <fieldset className="payment">
            <h2>Total Cost: ${finalCost}</h2>
            <p>Fees: ${fees}</p>
            <button type="submit">Checkout</button>
          </fieldset>
        </section>
      </form>
    </div>
  );
};


