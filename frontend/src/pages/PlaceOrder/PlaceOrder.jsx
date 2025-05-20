import React, { useContext, useState } from 'react';
import "./PlaceOrder.css";
import { CartContext } from "../../context/CartContext";
import { UserContext } from '../../context/userContext';
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlaceOrder = () => {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const deliveryFee = 20000;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;


  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user || !user.userId || !user.token) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  if (!paymentMethod) {
    alert("Please select a payment method");
    return;
  }

  try {
    const response = await axios.post(
      "https://web-suneats-backend.onrender.com/api/order/place",
      {
        userId: user.userId,
        items: cartItems,
        amount: total,
        paymentMethod,
        address: {
          fullName,
          phone,
          email,
          street: streetAddress,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (response.data.success) {
      navigate("/MyOrder");
    } else {
      alert("Failed to place the order.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong while placing the order");
  }
};

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <input
          type="text"
          placeholder='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder='Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder='Street Address'
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          required
        />
      </div>

      <div className="place-order-right">
        <div className="cart-totals">
          <h2 className="heading-cart">Cart Totals</h2>
          <div className="cart-row">
            <span>Subtotal</span>
            <span>{subtotal.toLocaleString()} IDR</span>
          </div>
          <div className="cart-row">
            <span>Delivery Fees</span>
            <span>{deliveryFee.toLocaleString()} IDR</span>
          </div>
          <div className="cart-row">
            <strong>Total</strong>
            <strong>{total.toLocaleString()} IDR</strong>
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
