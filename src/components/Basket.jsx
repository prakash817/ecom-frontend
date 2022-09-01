import React from "react";
import { useState } from "react";
import "./basket.css";

const Basket = ({ cartItems }) => {
  const [paymentDone, setPaymentDone] = useState(false);
  const netPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxedPrice = netPrice * 0.1; //14%
  let shippingCharg = netPrice > 2000 ? 0 : 20;
  const total = netPrice + taxedPrice + shippingCharg;
  return (
    <div className="basket">
      <h3>Cart Items</h3>

      {!cartItems.length ? (
        <h2> No Item Found </h2>
      ) : (
        <div className="basketInfo">
          <ol>
            {cartItems.map((e, i) => (
              <li key={e.id}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>{e.name}</div>
                  <div>
                    <span> price : </span>
                    <span>
                      {e.qty} x {e.price} /-
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <hr />
          <div>
            <span> netPrice : </span>
            <span> {netPrice} /- </span>
          </div>
          <div>
            <span> GST-price (10%) :</span>
            <span> {taxedPrice.toFixed(2)} /-</span>
          </div>
          <div>
            <span> Delivery Charge : </span>
            <span> {shippingCharg} /- </span>
          </div>
          <hr />
          <div>
            <strong className="total"> Total : </strong>
            <strong> {total} /- </strong>
          </div>

          <button onClick={() => setPaymentDone(true)}>
            {paymentDone ? "Thank you For Shopping" : "Proceed to Payment"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
