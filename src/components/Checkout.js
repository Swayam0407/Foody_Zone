import React from "react";

function Checkout({ item, onClose }) {
  
  if (!item) return null;

  return (
    <div className="checkout-overlay">
      <div className="checkout-popup">
        <h2>Checkout</h2>
        <div className="item-details">
          <h3>{item.name}</h3>
          <p>{item.text}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <div className="button-group">
            <button className="buy-button">Buy Now</button>
            <button className="back-button" onClick={onClose}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
