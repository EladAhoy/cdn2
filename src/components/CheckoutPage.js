import { useState } from 'react';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const [upcomingShows] = useState([
    { id: 0, name: 'Please Select', cost: 0 },
    { id: 1, name: 'Show 1', cost: 50 },
    { id: 2, name: 'Show 2', cost: 100 },
    { id: 3, name: 'Show 3', cost: 200 }]);
  const [selectedShow, setSelectedShow] = useState();
  const [quantity, setQuantity] = useState(1);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    creditCard: ''
  });
  const [finalCost, setFinalCost] = useState(0);
  const [fees, setFees] = useState(0);

  const handleShowSelection = (event) => {
    const showId = +event.target.value;
    const showObj = upcomingShows.find(el => el.id === showId);
    setSelectedShow(showObj);
  };

  const handleQuantityChange = (event) => {
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

  return (
    <div className='checkout-container animate__animated animate__rotateInUpLeft'>
      <h1>Mock Checkout</h1>
      <form className='checkout-form'>
        <section>
          <fieldset className="show-details">
            <h2>Show Selection</h2>
            <label>
              Select a show:
              <select onChange={handleShowSelection}>
                {upcomingShows.map((show) => (
                  <option key={show.id} value={show.id}>{show.name}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Quantity:
              <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
          </fieldset>

          <fieldset className="delivery-details">
            <h2>Delivery</h2>
            <p>Tickets will be emailed to you in addition to being available on the app.</p>
          </fieldset>
        </section>
        <section>
          <fieldset>
            <h2>Billing Information</h2>
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
            <label>
              Credit Card:
              <input type="text" name="creditCard" value={billingInfo.creditCard} onChange={handleBillingInfoChange} />
            </label>
          </fieldset>
          <fieldset className="payment">
            <h2>Pre Payment</h2>
            <button type="button" onClick={calculateFinalCost}>
              Calculate Cost
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


