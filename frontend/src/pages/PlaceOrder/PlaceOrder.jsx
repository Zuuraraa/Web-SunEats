import React, { useContext } from 'react';
import "./PlaceOrder.css";
import { CartContext } from "../../context/CartContext";

const PlaceOrder = () => {
  const { cartItems } = useContext(CartContext);

  const deliveryFee = 20000;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>

        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Phone Number' />
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street Address' />
      </div>

      <div className="place-order-right">
        <div className="cart-totals">
          <h2 className="heading-cart">Cart Totals</h2>
          <div className="cart-row">
            <span>Subtotal</span>
            <span>{subtotal} IDR</span>
          </div>

          <div className="cart-row">
            <span>Delivery Fees</span>
            <span>{deliveryFee} IDR</span>
          </div>

          <div className="cart-row">
            <strong>Total</strong>
            <strong>{total} IDR</strong>
          </div>
        </div>

        <button className="checkout-btn" type="submit">Pay Now</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
