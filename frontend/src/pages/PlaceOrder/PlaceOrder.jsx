import React, { useContext, useState } from 'react';
import "./PlaceOrder.css";
import { CartContext } from "../../context/CartContext";
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const navigate = useNavigate();

  const deliveryFee = 20000;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    navigate('/MyOrder');
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
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

          <div className="payment-method">
            <p className="payment-title">Payment Methods</p>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="gopay"
                  checked={paymentMethod === "gopay"}
                  onChange={handlePaymentChange}
                />
                <img src={assets.gopay} alt="GoPay" />
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="qris"
                  checked={paymentMethod === "qris"}
                  onChange={handlePaymentChange}
                />
                <img src={assets.qris} alt="QRIS" />
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentChange}
                />
                <p>COD</p>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="checkout-btn">Pay Now</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
