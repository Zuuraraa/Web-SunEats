import React, { useEffect, useState } from "react";
import axios from "axios";
import './MyOrder.css'
import { toast } from 'react-toastify';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://web-suneats-backend.onrender.com/api/order/all");
      setOrders(res.data.orders);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.post("https://web-suneats-backend.onrender.com/api/order/update", {
        orderId,
        status: newStatus,
      });
      fetchOrders(); // refresh data
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <div className="admin-orders">
      <h2>Manage Orders</h2>
      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <div className="order-header">
            <div>
              <h3>Customer Name: {order.address?.fullName}</h3>
              <p>Phone: {order.address?.phone}</p>
              <p>Address: {order.address?.street}</p>
            </div>
            <div>
              <p><strong>Total:</strong> {order.amount.toLocaleString()} IDR</p>
              <p><strong>Status:</strong></p>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
              >
                <option value="Order Received">Order Received</option>
                <option value="Food Processing">Food Processing</option>
                <option value="Order Complete">Order Complete</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="order-items">
            {order.items.map((item, idx) => (
              <div className="order-item" key={idx}>
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
