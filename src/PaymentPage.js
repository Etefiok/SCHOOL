import React, { useState } from 'react';
import './PaymentPage.css'; // Import the CSS file for styling

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Use the card details (cardNumber, expiryDate, cvc) to process the payment
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <label>
        <p>you are about to pay your admission fee</p>
        Card number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <label>
        Expiry date:
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
      </label>
      <label>
        CVC:
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </label>
      <button type="submit">Pay</button>
    </form>
  );
}

export default PaymentPage;
