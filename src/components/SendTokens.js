import AddressValidationForm from './AddressValidationForm';
import ConnectToMetamask from './ConnectToMetamask';
import SendEthPayment from './SendEthPayment';
import './SendTokens.css';
import SendTokensErcTest from './SendTokensErcTest';
// import SendTokensEth from './SendTokensEth';

export default function SendTokens() {

  const handleSubmit = (event) => {
    event?.preventDefault();
  };

  return (
    <div className='checkout-container animate__animated animate__rotateInUpLeft'>
      <h1>Send Tokens</h1>
      <section>
        <fieldset className="send-eth">
          <h2>Send ETH payments</h2>
          <SendTokensErcTest />
        </fieldset>
      </section>
      <h1>Send ETH</h1>
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
        </section>
      </form>
    </div>
  );
};


